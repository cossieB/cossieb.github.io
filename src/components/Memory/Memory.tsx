import Finished from "./Finished"
import GameStart from "./GameStart"
import styles from '../../styles/memory.module.scss';
import Board from "./Board"
import { createSignal, Match, Switch } from "solid-js";
import Signup, { username } from "../Signup";
import Instructions from "./Instructions";
import { state } from "./store";

export default function Memory() {
    const [readInstructions, setReadInstructions] = createSignal(false);
    return (
        <div class={styles.container}>
            <Switch fallback={<GameStart />} >
                <Match when={!username()} >
                    <Signup className={styles.signup} />
                </Match>
                <Match when={!readInstructions()}>
                    <Instructions setReadInstructions={setReadInstructions} />
                    <Board />
                </Match>
                <Match when={state.finished} >
                    <Finished
                        setReadInstructions={setReadInstructions}
                    />
                </Match>
            </Switch>
        </div>

    )
}
