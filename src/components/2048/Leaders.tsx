import styles from "../../styles/2048.module.scss"
import { createEffect, createResource, createSignal, For } from "solid-js";
import Score from "../../components/Score";
import type { Scores } from "./types";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

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
            {leaders().length && <Leaders header="Local Leaders" leaders={leaders()} />}
        </div>
    )
}
export function GlobalLeaders() {
    const [leaders] = createResource<Scores[]>(getData, {initialValue: []})

    async function getData() {
        try {
            const q = query(collection(db, 'g2048'), orderBy('score', 'desc'), limit(5))
            const data = await getDocs(q)

            let resArr: Scores[] = data.docs.map(doc => {
                let score = Number(doc.data().score);
                let date = new Date(doc.data().date.seconds * 1000);
                let name = doc.data().name
                return { score, name, date }
            })
            return resArr
        }
        catch (e: any) {
            console.log(e.message)
            return []
        }
    }

    return (
        <div id={styles.globalLeaders} class={styles.leaderboard}>
            {leaders() && <Leaders leaders={(leaders())} header="Global Leaders" />}
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
            <For each={leaders.slice(0, 5)}>{item =>
                <Score item={item} />
            }
            </For>

        </>
    )
}