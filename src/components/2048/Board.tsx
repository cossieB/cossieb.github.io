import styles from "../../styles/2048.module.scss"
import { ControlElem, Elem } from './ControlElem';
import { For } from 'solid-js';

interface P {
    array: Elem[]
    move?: (direction: 'up' | 'down' | 'left' | 'right') => void
}

export function Board(props: P) {
    let x1: number;
    let y1: number;

    function handleTouchEnd(e: TouchEvent) {
        const { clientX: x2, clientY: y2 } = e.changedTouches.item(0)!
        const m = (y1 - y2) / (x2 - x1) // High school gradient formula. clientY starts from the top. That's why I swapped y1 and y2 
        const arctan = Math.atan(m)
        const angle = arctan * 180 / Math.PI;
        if (angle > -30 && angle < 30) {
            if (x2 > x1) {
                props.move!('right')
            }
            else {
                props.move!("left")
            }
        }
        else if ((angle > 60 && angle <= 90) || (angle < -60 && angle > -90)) {
            if (y2 < y1) {
                props.move!("up")
            }
            else {
                props.move!("down")
            }
        }
    }
    return (
        <div class={styles.board}
            onTouchStart={e => {
                x1 = e.touches.item(0)!.clientX;
                y1 = e.touches.item(0)!.clientY;
            }}
            onTouchEnd={handleTouchEnd}
        >
            <For each={new Array(16).fill(0)}>
                {() => <div class={styles.block} />}
            </For>
            <For  each={props.array} >{item =>
                <ControlElem
                    item={item}
                />
            }
            </For>
        </div>);
}
