import WordleLogic from "./WordleLogic";
import { words } from "./words";
import styles from "../../styles/Wordle.module.scss"
import GameOver from "./GameOver";
import { state } from "./store";

export const initialState = {
    wordIndex: 0,
    activeRow: 0,
    word: words[0],
    currentGuess: "",
    guessList: [] as string[],
    inputDisabled: false,
    status: 'playing' as 'playing' | 'won' | 'lost'
}
export type WordleState = typeof initialState;

export default function Wordle() {
    
    return (
        <div
            class={styles.container}
        >
            {state.status == 'playing' ?
                <WordleLogic /> :
                <GameOver />}
        </div>
    )
}