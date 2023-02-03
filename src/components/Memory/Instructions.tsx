import { changeBoardSize, state } from "./store";
import styles from '../../styles/memory.module.scss';
import type { Setter } from "solid-js";

type P = {
    setReadInstructions: Setter<boolean>
}

export default function Instructions(props: P) {
    return (
        <div class={styles.rules}>
            <h1>Rules</h1>
            <h2>There are two of each symbol. Find the matches.</h2>
            <div class={styles.difficulty}>
                Game Size
                <div>
                    <button
                        disabled={state.gameSize == 1}
                        onClick={() => {
                            changeBoardSize(-1)
                        }}
                    >↓</button>
                    <button
                        disabled={state.gameSize == 4}
                        onClick={() => {
                            changeBoardSize(1)
                        }}
                    >↑</button>
                </div>
                {state.gameSize}
            </div>
            <h3>Ready?</h3>
            <button
                style={{ color: 'white', border: '1px solid white' }}
                class={styles.niceButton}
                onClick={() => props.setReadInstructions(true)}
            >
                I'm Ready.
            </button>
        </div>
    )
}