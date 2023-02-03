import { createRenderEffect, createSignal, onCleanup, onMount, Setter } from "solid-js"
import Block from "./Block"
import Solver, {type Cell } from "./Solver"
import styles from "../../styles/sudoku.module.scss";
import { createMutable } from "solid-js/store";

interface Props {
    setMode: Setter<boolean>
    setPuzzleString: Setter<string>
}

export default function ({setPuzzleString, setMode}: Props) {
    const puzzle = createMutable(new Solver('.................................................................................'))
    const [selected, setSelected] = createSignal<Cell>()
    const [clashes, setClashes] = createSignal<{[key in 'row' | 'column' | 'region']: Set<Cell>}>({
        row: new Set<Cell>(),
        column: new Set<Cell>(),
        region: new Set<Cell>(),
    })

    let ref: HTMLDivElement;

    createRenderEffect(() => {
        if (window.innerWidth > 768) return
        const sudokuWidth = ref.clientWidth!;
        const width = sudokuWidth / 9;
        ref!.style.gridTemplateColumns = `repeat(9, ${width}px)`
        const blocks = document.querySelectorAll<HTMLDivElement>('.sudoBlock') 
        blocks.forEach(block => {
            block.style.height = String(width) + 'px'
        })
    })

    onMount(() => {
        document.addEventListener('keydown', handleKeypress)
    })
    onCleanup(() => {
        document.removeEventListener('keydown', handleKeypress)
    })

    function handleKeypress(e: KeyboardEvent) {
        if (!selected()) return

        const increment = (num: number) => {
            let old = selected()!.cellNumber
            if (old + num < 0) return old;
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
        if (/^\.|0$/.test(e.key)) {
            selected()!.value = '.'
        }
        const clashes = puzzle.check()
        setClashes(clashes)
    }
    function validate() {
        if (clashes().column.size + clashes().region.size + clashes().row.size > 0) return
        let puzzleString = ""
        puzzle.array.forEach(cell => {
            puzzleString += cell.value
        })
        setPuzzleString(puzzleString)
        setMode(true)
    }
    function increment(num: number) {
        if (!selected() || selected()!.frozen) return
        let old = Number(selected()!.value) || 0;
        let sum: number;
        if (old + num < 1) sum = 9;
        else if (old + num > 9) sum = 1;
        else sum = old + num
        selected()!.value = String(sum)
        const clashes = puzzle.check()
        setClashes(clashes)
    }
    function clear() {
        if (!selected() || selected()!.frozen ) return
        selected()!.value = '.'
    }

    return (
        <div  class={`${styles.sudoGame} ${styles.container} ${styles.flexCenter} ${styles.flexColumn}`} onAuxClick={() => setSelected(undefined)}>
            <div style={{'margin-bottom': '1rem'}} >
                <button class={styles.sudoBtn} onClick={validate}  >
                    Validate
                </button>
            </div>
            <div ref={ref!} id={styles.sudoku}>
                {puzzle.array.map(cell => <Block cell={cell} selected={selected()} setSelected={setSelected} clashes={clashes()} />)}
            </div>
            <div class={styles.mobileBtns}>
                <button disabled={selected() == undefined} onClick={() => increment(1)}  >
                    ↑
                </button>
                <button disabled={selected() == undefined} onClick={() => increment(-1)} >
                    ↓
                </button>
                <button disabled={selected() == undefined} onClick={clear} >
                    ←
                </button>
            </div>
        </div>
    )
}