import { onCleanup, onMount, Setter } from 'solid-js';
import { Board } from './Board';
import type { Elem } from './ControlElem';


export const numbers = new Array(16).fill(0).map((_, i) => i)

interface P {
    setScore: Setter<number>
    setGameOver: Setter<boolean>
    array: Elem[]
}

export default function Logic2048(props: P) {

    onMount(() => {
        document.addEventListener('keydown', handleKeyPress);
        createBlock();
        createBlock();
    })
    onCleanup(() => {
        document.removeEventListener('keydown', handleKeyPress)
    })

    function handleKeyPress(e: KeyboardEvent) {
        const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] as const;
        type Key = typeof validKeys[number];
        if (!validKeys.includes(e.key as Key)) return;
        const key = e.key as Key;

        switch (key) {
            case 'ArrowDown':
                move('down');
                break;
            case 'ArrowUp':
                move('up');
                break;
            case 'ArrowLeft':
                move('left');
                break;
            case 'ArrowRight':
                move('right');
                break;
        }
    }

    function move(direction: 'up' | 'down' | 'left' | 'right') {
        let sortKey: 'left' | 'top';
        let key: typeof sortKey;
        if (direction == 'left' || direction == 'right') {
            sortKey = 'left';
            key = 'top';
        }
        else {
            sortKey = 'top';
            key = 'left';
        }

        const factor = direction == 'left' || direction == 'up' ? 1 : -1; // factor dynamically reverses the sort order of the array
        const sorted = [...props.array].sort((a, b) => {
            if (a[sortKey] * factor < b[sortKey] * factor)
                return -1;
            else
                return 1;
        });

        for (let iter = 0; iter < 4; iter++) {
            const arr = sorted.filter(x => x[key] == iter);
            if (arr.length == 0)
                continue;

            arr.forEach((cell, i) => {

                if (direction == 'left' || direction == 'up') {
                    if (i == 0) {
                        cell[sortKey] = 0;
                    }
                    else {
                        cell[sortKey] = arr[i - 1][sortKey] + 1;
                    }
                }
                else {
                    if (i == 0) {
                        cell[sortKey] = 3;
                    }
                    else {
                        cell[sortKey] = arr[i - 1][sortKey] - 1;
                    }
                }
                if (i != 0 && arr[i].value == arr[i - 1].value && !arr[i - 1].deleted) {
                    collide(arr[i - 1], arr[i]);
                }
            });
        }
        removeDeleted()
        createBlock();
        props.array.length == 16 && checkGameOver()
    }
    function collide(toIncrease: Elem, toDelete: Elem) {
        toIncrease.value *= 2;
        toDelete.left = toIncrease.left;
        toDelete.top = toIncrease.top;
        toDelete.value = toIncrease.value;
        toDelete.deleted = true;
        props.setScore(prev => prev + toIncrease.value);
    }
    function removeDeleted() {
        let i = 0
        while (i < props.array.length) {
            const elem = props.array[i]
            if (elem.deleted) {
                props.array.splice(i, 1)
                continue
            }
            i++
        }

    }

    function createBlock() {
        if (props.array.length == 16) return;
        const empties = numbers.filter(num => !props.array.map(t => t.index()).includes(num));
        const tempIndex = Math.floor(Math.random() * empties.length);
        const index = empties[tempIndex];
        const top = Math.floor(index / 4);
        const left = index % 4;
        const id = crypto.randomUUID();
        const value = Math.random() < 0.75 ? 2 : 4;

        props.array.push({
            id, value, top, left, index() {
                return 4 * this.top + this.left
            },
        });
    }
    function checkGameOver() {
        props.array.sort((a, b) => {
            if (a.index() < b.index()) return -1
            else return 1;
        })
        for (let i = 0; i < props.array.length; i++) {
            const elem = props.array[i];
            if ((i + 1) % 4 != 0) {
                if (props.array[i + 1].value == elem.value) {
                    return
                }
            }
            if (i + 4 < props.array.length) {
                if (props.array[i + 4].value == elem.value) {
                    return
                }
            }
        }
        setTimeout(() => {
            props.setGameOver(true);
        }, 1000)
    }

    return (
            <Board array={props.array} move={move} />
    );
}

