import Block from "./Block"
import Solver, { Cell } from "./Solver"
import styles from "../../styles/sudoku.module.scss";
import { createRenderEffect, createSignal, For, onCleanup, onMount, Setter } from "solid-js";
import { createMutable } from "solid-js/store";

interface Props {
    puzzleString: string,
    setMode: Setter<boolean>,
    setPuzzleString: Setter<string>
}

export default function PlaySudoku(props: Props) {
    let ref: HTMLDivElement;
    const puzzle = createMutable(new Solver(props.puzzleString))
    const [selected, setSelected] = createSignal<Cell>()
    const [clashes, setClashes] = createSignal<{ [key in 'row' | 'column' | 'region']: Set<Cell> }>()
    const [hasWon, setHasWon] = createSignal(false)
    const [error, setError] = createSignal(false)

    createRenderEffect(() => {
        if (window.innerWidth > 768) return
        const sudokuWidth = ref.clientWidth!;
        const width = sudokuWidth / 9;
        ref!.style.gridTemplateColumns = `repeat(9, ${width}px)`
        const blocks = document.querySelectorAll<HTMLDivElement>('.sudoBlock')
        blocks.forEach(block => {
            block.style.height = `${width}px`
        })
    }, [])

    onMount(() => {
        document.addEventListener('keydown', handleKeypress)
    })
    onCleanup(() => {
        document.removeEventListener('keydown', handleKeypress)
    })

    function handleKeypress(e: KeyboardEvent) {
        setError(false);
        setClashes(undefined)
        if (!selected() || hasWon()) return

        const increment = (num: number) => {
            let old = selected()!.cellNumber
            if (old + num < 0 || old + num > 80) return old;
            else if (old + num > 80) return old
            else return old + num
        }
        let newCellNumber = selected()!.cellNumber
        if (e.key == 'ArrowUp') newCellNumber = increment(-9)
        else if (e.key == 'ArrowDown') newCellNumber = increment(9)
        else if (e.key == 'ArrowLeft') newCellNumber = increment(-1)
        else if (e.key == 'ArrowRight') newCellNumber = increment(1)

        setSelected(puzzle.array[newCellNumber])

        if (selected()!.frozen) return
        if (/^[1-9]$/.test(e.key)) {
            selected()!.value = e.key
        }
        if (/\.|0/.test(e.key)) {
            selected()!.value = '.'
        }
    }
    function reset() {
        setClashes(undefined)
        puzzle.reset();
        setError(false);
        setHasWon(false)
    }
    function solve() {
        setError(false);
        setClashes(undefined)
        const result = puzzle.solve()
        if (!result) {
            setError(true)
        }
    }
    function check() {
        const clashes = puzzle.check()
        setError(false);
        setClashes(clashes)
        if (puzzle.array.some(item => item.value == '.')) return;

        if (clashes.column.size + clashes.region.size + clashes.row.size == 0) {
            setHasWon(true);
            setSelected(undefined)
        }
    }
    function increment(num: number) {
        setClashes(undefined)
        if (!selected() || selected()!.frozen) return;
        let old = Number(selected()!.value) || 0;
        let sum: number;
        if (old + num < 1) sum = 9;
        else if (old + num > 9) sum = 1;
        else sum = old + num
        selected()!.value = String(sum)
    }
    function clear() {
        setClashes(undefined)
        if (!selected()! || selected()!.frozen) return;
        selected()!.value = '.'
    }

    return (
        <div class={`${styles.sudoGame} ${styles.container} ${styles.flexCenter} ${styles.flexColumn}`} onAuxClick={() => setSelected(undefined)}>
            {error() && <div style={{ 'font-size': '5rem', position: 'absolute', background: 'red' }}>Could not solve puzzle.</div>}
            <div style={{ 'margin-bottom': '1rem' }} >
                    <button class={styles.sudoBtn} onClick={check}  >
                        {puzzle.array.some(item => item.value == '.') ? "Check" : "Finish"}
                    </button>
                    <button class={styles.sudoBtn} onClick={reset}  >
                        Reset
                    </button>
                    <button class={styles.sudoBtn} onClick={solve}  >
                        Solve
                    </button>
                    <button class={styles.sudoBtn} onClick={() => props.setMode(false)}  >
                        Custom Puzzle
                    </button>
            </div>
            <div ref={ref!} id={styles.sudoku}>
                <For each={puzzle.array}>
                    {cell =>
                        <Block
                            cell={cell}
                            selected={selected()}
                            setSelected={setSelected}
                            clashes={clashes()}
                            hasWon={hasWon()}
                        />}
                </For>
            </div>
            <div class={styles.mobileBtns}>
                <button disabled={selected == undefined} onClick={() => increment(1)}  >
                    ↑
                </button>
                <button disabled={selected == undefined} onClick={() => increment(-1)} >
                    ↓
                </button>
                <button disabled={selected == undefined} onClick={clear} >
                    ←
                </button>
            </div>
        </div>
    )
}