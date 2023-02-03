import { createEffect, onCleanup, onMount } from "solid-js"
import Board from "./Board"
import { increaseTime, state, win } from "./store"

export default function GameStart() {
    let timer: NodeJS.Timer
    onMount(() => {
        timer = setInterval(() => {
            increaseTime()
        }, 1000)
    })

    onCleanup(() => {
        clearInterval(timer)
    })
    
    
    return (
        <>
            <Board />
        </>
    )
}
