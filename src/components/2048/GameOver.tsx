import styles from "../../styles/2048.module.scss"
import { Board } from "./Board";
import { onMount, Setter } from "solid-js";
import { setUsername, username } from "../../components/Signup";
import type { Elem } from "./ControlElem";
import type { Scores } from "./types";
import createBlock from "./createBlock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

interface P {
    score: number
    array: Elem[]
    setScore: Setter<number>
    setGameOver: Setter<boolean>
}

export default function GameOver(props: P) {
    
    onMount(() => {
        setLocal();
        setGlobal()
    })

    function setLocal() {
        let localLeaders = localStorage.getItem('g2048');
        if (localLeaders) {
            let leaders: Scores[] = JSON.parse(localLeaders)
            leaders.push({ name: username(), date: new Date(), score: props.score })
            leaders.sort((a, b) => b.score - a.score).slice(0, 1000);
            localStorage.setItem('g2048', JSON.stringify(leaders))
        }
        else {
            let leaders: Scores[] = [{ name: username(), date: new Date(), score: props.score }]
            localStorage.setItem('g2048', JSON.stringify(leaders))
        }
    }
    async function setGlobal() {
        try {
            await addDoc(collection(db, 'g2048'), {
                name: username(), date: new Date(), score: props.score 
            })
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div class={styles.gameOver}>
                <div>
                    <h4>{username()}</h4>
                    <h3>Game Over</h3>
                    <h4> {props.score} </h4>
                </div>
                <div class={styles.buttons}>
                    <button onClick={() => {
                        props.setGameOver(false);
                        props.setScore(0)
                        while (props.array.length > 0) props.array.pop()
                        props.array.push(createBlock(props.array))
                        props.array.push(createBlock(props.array))
                    }}>
                        Play Again
                    </button>
                    <button onClick={() => {
                        props.setGameOver(false);
                        props.setScore(0)
                        setUsername("")
                        while (props.array.length > 0) props.array.pop()
                    }}>
                        Change Name
                    </button>
                </div>
            </div>
            <Board array={props.array} />
        </>
    )
}