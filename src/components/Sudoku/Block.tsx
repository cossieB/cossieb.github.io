import type { Cell } from "./Solver";
import styles from "../../styles/sudoku.module.scss";
import type { JSX } from "solid-js/jsx-runtime";
import type { Setter } from "solid-js";

interface P34534 {
    cell: Cell,
    selected: Cell | undefined,
    setSelected: Setter<Cell | undefined>,
    clashes?: { [key in 'row' | 'column' | 'region']: Set<Cell> } | undefined,
    hasWon?: boolean
}

export default function Block(props: P34534) {
    const style = () => {
        let style: JSX.CSSProperties = {}
        if (!props.cell.frozen) style.color = 'white'
        if (props.cell.row == 2 || props.cell.row == 5) style["border-bottom"] = '3px solid black'
        if (props.cell.column == 2 || props.cell.column == 5) style["border-right"] = '3px solid black'
        const isClash = props.clashes?.row?.has(props.cell) || props.clashes?.column?.has(props.cell) || props.clashes?.region?.has(props.cell)
        if (!props.cell.frozen && isClash) style["background-color"] = 'red'
        if (props.selected == props.cell) style["border-color"] = 'white'
        if (props.hasWon) {
            style["background-color"] = 'green'
            style.color = 'white'
        }
        return style
    }

    return (
        <div
            style={style()}
            class={`${styles.sudoBlock}`}
            onClick={() => {
                !props.hasWon && props.setSelected(props.cell)
            }}
        >
            {props.cell.value != '.' && props.cell.value}
        </div>
    )
}