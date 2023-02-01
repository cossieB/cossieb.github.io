import styles from "../../styles/2048.module.scss"
import { createEffect, createSignal, For } from "solid-js";
import Score from "../../components/Score";
import type { Scores } from "./types";

export function LocalLeaders() {
    const [leaders, setLeaders] = createSignal<Scores[]>([])
    createEffect(() => {
        let storage = localStorage.getItem('g2048')
        if (storage) {
            let localLeaders: Scores[] = JSON.parse(storage);
            localLeaders = localLeaders.map(item => {
                const { name, date, score } = item;
                return { name, score, date: new Date(date) }
            })
            setLeaders(localLeaders)
        }
    }, [])
    return (
        <div id={styles.localLeaders} class={styles.leaderboard}>
           { leaders().length && <Leaders header="Local Leaders" leaders={leaders()} /> }
        </div>
    )
}

interface P434443 {
    leaders: Scores[],
    header: string
}

function Leaders({ leaders, header }: P434443) {
    return (
        <>
             <h4>{header}</h4>
             <For each={leaders.slice(0,5)}>{item =>
                <Score item={item} />
             }
             </For>

        </>
    )
}