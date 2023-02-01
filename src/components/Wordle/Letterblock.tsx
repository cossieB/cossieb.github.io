import type { RowProps } from "./Row";
import styles from "../../styles/Wordle.module.scss"
import { createEffect } from "solid-js";

interface P extends RowProps {
    letter: string
    index: number
}

export default function LetterBlock(props: P) {
    let ref: HTMLDivElement
    createEffect(() => {
        let className = "";
        if (props.guessList.length > props.row) {
            if (props.correctWord[props.index] == props.letter) {
                className += " " + styles.correct
            }
            else if (props.correctWord.includes(props.letter)) {
                className += " " + styles.ok
            }
            else {
                className += " " + styles.wrong
            }
            className += " " + styles[`block${props.index}`];
            ref.className = styles.colorblock + className
        }
    })
    return (
        <div class={styles.letterblock} >
            <div class={styles.colorblock} ref={ref!} />
            <div >
                {props.letter && props.letter.toUpperCase()}
            </div>
        </div>
    )
}