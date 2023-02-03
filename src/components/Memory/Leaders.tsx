import { For } from "solid-js";
import { formatDate } from "../../lib/formatDate";
import type { P24235 } from "./interfaces";
import styles from '../../styles/memory.module.scss';

export default function Leaders(props: P24235) {
    return (
        <div class={styles.leaderboardContainer}>
            {props.leaders.length > 0 && <h4> {props.header} </h4>}
            {props.leaders.length > 0 &&
                <div class={styles.leaderboard}>
                    <For each={props.leaders} >
                    {item =>
                        <div class={styles.leadership}>
                            <div style={{ display: 'flex', 'justify-content': 'space-between' }}>
                                <strong>{item.name}</strong>
                            </div>
                            <div class={styles.memscorediv} >
                                <div class={styles.memScores}>
                                    <div>Time: {item.time} </div>
                                    <div>Flips: {item.flips} </div>
                                </div>
                                <div>{ formatDate(item.date) }</div>
                                <div>{item.total}</div>
                            </div>
                        </div>}
                    </For>
                </div>}
        </div>
    )
}