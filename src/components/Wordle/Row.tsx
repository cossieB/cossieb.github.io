import LetterBlock from "./Letterblock";
import styles from "../../styles/Wordle.module.scss"
import { For } from "solid-js";

export interface RowProps {
    currentGuess: string
    activeRow: number
    row: number
    wordToDisplay: string | undefined
    correctWord: string
    guessList: string[]
}

export default function Row(props: RowProps) {
    return (
        <div class={styles.row}>
            <For each={new Array(5).fill(0)}>{(_, i) =>
                <LetterBlock
                    {...props}
                    letter={props.wordToDisplay ? props.wordToDisplay[i()] : ""}
                    index={i()}
                />}

            </For>
        </div>
    )
}