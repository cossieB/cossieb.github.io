import { createEffect, createSignal, Show } from "solid-js";
import {createMutable} from "solid-js/store"
import Signup, {username} from "../Signup";
import styles from "../../styles/2048.module.scss"
import type { Elem } from "./ControlElem";
import GameOver from "./GameOver";
import { LocalLeaders } from "./Leaders";
import Logic2048 from "./Logic2048";

export default function Game2048() {
    const [score, setScore] = createSignal(0);
    const [gameOver, setGameOver] = createSignal(false); 
    const array = createMutable<Elem[]>([]);
    return (
        <div class={styles.container} >
            <Show when={!username()} >
                <Signup className={styles.signup} />
            </Show>
            <Show when={gameOver()} >
                <GameOver
                    score={score()}
                    setScore={setScore}
                    setGameOver={setGameOver}
                    array={array}
                />
            </Show>
            <Show when={username() && !gameOver()}>
                <div class={styles.game}>
                    <div class={styles.score}>
                        {score() > 0 ?
                            <span> {score()} </span> :
                            <aside>
                                {window.matchMedia("(pointer: coarse)").matches ? "Swipe across the screen " : "Use the arrow buttons"}  to smash two blocks of the same value together.
                            </aside>}
                    </div>
                    <Logic2048
                        setScore={setScore}
                        setGameOver={setGameOver}
                        array={array}
                    />
                    {window.innerWidth < 768 &&
                        <button
                            class={styles.HSToggle}
                            onClick={() => {
                                const panel = document.getElementsByClassName(styles.leadersPanel)[0]! as HTMLDivElement
                                panel.style.transform = `translateX(0)`
                            }}
                        >
                            High Scores &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    }
                    <div class={styles.leadersPanel}>
                        {window.innerWidth < 768 &&
                            <button
                                class={styles.HSToggle}
                                onClick={() => {
                                    const panel = document.getElementsByClassName(styles.leadersPanel)[0]! as HTMLDivElement
                                    panel.style.transform = `translateX(100vw)`
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                Back
                            </button>
                        }
                        <LocalLeaders />
                    </div>
                </div>
            </Show>
        </div>
    )
}