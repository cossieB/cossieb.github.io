import Row from "./Row";
import { state } from "./store";
import styles from "../../styles/Wordle.module.scss"
import { For } from "solid-js";

export default function Blocks() {
    return (
        <div class={styles.blocks}>
            <For each={new Array(6).fill(0)}>{(_, i) =>
                <Row
                    currentGuess={state.currentGuess}
                    activeRow={state.activeRow}
                    row={i()}
                    wordToDisplay={state.activeRow == i() ? state.currentGuess : state.guessList[i()]}
                    correctWord={state.word()}
                    guessList={state.guessList}
                />}

            </For>
        </div>
    )
}