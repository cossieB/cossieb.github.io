import { addDoc, collection, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { createSignal, onMount } from "solid-js";
import { db } from "../../firebase";
import { username } from "../Signup";
import type { Times } from "./interfaces";
import Leaders from "./Leaders";
import { state } from "./store";

export function GlobalScores() {
    const [globalLeaders, setGlobalLeaders] = createSignal<Times[]>([])
    onMount(() => {
        // addGlobal()
    })

    async function addGlobal() {
        try {
            await addDoc(collection(db, 'times'), {
                name: username(),
                time: state.time,
                date: new Date(),
                flips: state.flips,
                total: state.flips + state.time,
                gameSize: state.gameSize
            })
        }
        catch (err: any) {
            console.log(err.message)
        }
        try {
            const q = query(collection(db, 'times'), orderBy('total', 'asc'), limit(50), where("gameSize", "==", state.gameSize))
            const data = await getDocs(q)

            let resArr: Times[] = data.docs.map(doc => {
                let time = Number(doc.data().time);
                let date = new Date(doc.data().date.seconds * 1000);
                let name = doc.data().name;
                let flips = Number(doc.data().flips);
                let total = Number(doc.data().total);
                return { time, name, date, flips, total, gameSize: state.gameSize }
            })
            setGlobalLeaders(resArr)
        }
        catch (err: any) {
            console.log(err.message)
        }
    }
    return <Leaders leaders={globalLeaders()} header="Around The World" />
}

export function LocalScores() {

    const [locallLeaders, setLocalLeaders] = createSignal<Times[]>([])

    // onMount(addLocal)

    function addLocal() {
        const obj = {
            name: username(),
            date: new Date(),
            time: state.time,
            flips: state.flips,
            total: state.flips + state.time,
            gameSize: state.gameSize
        }
        let localLeaders = localStorage.getItem('memory');
        let leaders: Times[]
        if (localLeaders) {
            leaders = JSON.parse(localLeaders)
            leaders.push(obj)
            leaders.sort((a, b) => a.total - b.total).slice(0, 1000);
            localStorage.setItem('memory', JSON.stringify(leaders))
        }
        else {
            leaders = [obj]
            localStorage.setItem('memory', JSON.stringify(leaders))
        }
        leaders = leaders.map(item => {
            let time = Number(item.time);
            let date = new Date(item.date);
            let { name, gameSize } = item;
            let flips = Number(item.flips);
            let total = Number(item.total);
            return {
                time,
                date,
                name,
                flips,
                total,
                gameSize
            }
        }).
            filter(item => item.gameSize == state.gameSize);
        setLocalLeaders(leaders)

    }
    return <Leaders leaders={locallLeaders()} header="On This Device" />
}
