import { LocalScores, GlobalScores } from "./memoryScores";
import styles from '../../styles/memory.module.scss';
import type { Setter } from "solid-js";
import { setUsername, username } from "../Signup";
import { playAgain, state } from "./store";

interface P {
    setReadInstructions: Setter<boolean>
}

export default function Finished(props: P) {
    
    return (
        <div id={styles.finished}>
            <div style={{ 'text-align': 'center' }}>
                <h1>A winner is you!!!</h1>
                <h4>{username()}, you finished in {state.time} seconds and {state.flips} flips.</h4><br />
                <h4>Total score: {state.flips + state.time}</h4>
            </div>
            <button
                onClick={() => {
                    playAgain()
                    props.setReadInstructions(false)
                } }
                style={{ width: '50%', 'align-self': 'center' }}
                class={styles.niceButton}
            >
                Play Again
            </button>
            <button
                onClick={() => { 
                    setUsername("")
                    props.setReadInstructions(false)
                    playAgain()
                }}
                style={{ width: '50%', 'align-self': 'center' }}
                class={styles.niceButton}
            >
                Change Name
            </button>
            <h2 style={{ 'text-align': 'center' }}>Best Scores</h2>
            <div id={styles.highScores}>
                <LocalScores />
                <GlobalScores />
            </div>
        </div>
    )
}