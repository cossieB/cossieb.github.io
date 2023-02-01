import Blocks from "./Blocks"
import { nextWord, state } from "./store";
import styles from "../../styles/Wordle.module.scss"

export default function() {
    return (
        <>
            <Blocks />
            <div class={styles.gameOver}>
                <h1>{state.status == 'won' ? "You Win" : "You Lose"} </h1>
                <h4>{state.word().toUpperCase()}</h4>
                <button onClick={() => nextWord() }>
                    Next Word
                </button>
            </div>
        </>
    )
}