import styles from "../../styles/pomodoro.module.scss"
import { state } from "./store";
import { incBreak, incSess, reset, start } from "./store";

export default function Pomodoro() {
    return (
        <main id={styles.pomodoro} class={`${styles.container}`}>
            <div id={styles.outer}>
                <div id={styles.controls}>
                    <section >
                        <h2 id={styles["break-label"]}>Break Length</h2>
                        <div class={styles.buttonDiv}>
                            <button id={styles["break-increment"]} class={styles.pomoBtn} onClick={incBreak} value={"1"}>↑</button>
                            <h3 id={styles["break-length"]}>{state.breakMin}</h3>
                            <button id={styles["break-decrement"]} class={styles.pomoBtn} onClick={incBreak} value={"-1"}>↓</button>
                        </div>
                    </section>
                    <section >
                        <h2 id={styles["session-label"]}>Session Length</h2>
                        <div class={styles.buttonDiv}>
                            <button id={styles["session-increment"]} class={styles.pomoBtn} value={"1"} onClick={incSess}>↑</button>
                            <h3 id={styles["session-length"]}> {state.sessionMin}</h3>
                            <button id={styles["session-decrement"]} class={styles.pomoBtn} value={"-1"} onClick={incSess}>↓</button>
                        </div>
                    </section>
                </div>
                <div id={styles["timer-div"]}>
                    {state.seconds > 0 ? <h2 id={styles["timer-label"]}>Session</h2> : <h2 id={styles["timer-label"]}> Break </h2>}
                    <section id={styles["time-left"]}>{state.seconds > 0 ? state.left : state.breakTime}</section>
                </div>
                <div id={styles.buttons}>
                    <button id={styles.reset} class={styles.pomoBtn} onClick={reset}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </button>
                    <button id={styles["start_stop"]} class={styles.pomoBtn} onClick={start}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    )
}