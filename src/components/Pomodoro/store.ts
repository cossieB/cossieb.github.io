import { createStore } from "solid-js/store";
import type { ClickEvent } from "../../solidTypes";
import { convert } from "./convert";

const initialState = {
    breakMin: 5,
    sessionMin: 25,
    seconds: 1500,
    break: 300,
    left: () => convert(state.seconds),
    breakTime: () => convert(state.break),
    sessionLength: 1500,
    timer: NaN
}

const endBeep = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")
const startBeep = new Audio("https://www.soundjay.com/buttons/beep-05.wav")

const [state, setState] = createStore({...initialState})
export { state }

export function incSess(e: ClickEvent<HTMLButtonElement>) {
    if (!state.timer) {
        let s = Math.max(60, Math.min(3600, state.seconds + 60 * Number(e.currentTarget!.value)))
        let m = Math.max(1, Math.min(60, state.sessionMin + 1 * Number(e.currentTarget!.value)))
        setState({ sessionMin: m, seconds: s, sessionLength: s })
    }
}
export function incBreak(e: ClickEvent<HTMLButtonElement>) {
    if (!state.timer) {
        let m = Math.max(1, Math.min(60, state.breakMin + 1 * Number(e.currentTarget!.value)))
        setState({ breakMin: m, break: m * 60 })
    }
}
export function start() {
    if (!state.timer) {
        startBeep.pause(); 
        startBeep.currentTime = 0;
        startBeep.play()
        setState({
            timer: setInterval(countdown, 1000)
        })
    }
    else {
        clearTimer();
    }
}

export function countdown() {
    if (state.seconds > 0) {
        let newSecs = state.seconds - 1;
        setState({ seconds: newSecs})
    }
    else if (state.timer) {
        clearTimer()
        endBeep.play();
        setState({
            timer: setInterval(breakCountdown, 1000)
        })
    }
}
export function breakCountdown() {
    if (state.break > 0) {
        let newSecs = state.break - 1;
        setState({ break: newSecs})
    }
    else if (state.timer) {
        clearTimer()
        setState({
            seconds: state.sessionLength,
        })
        start()
    }

}
export function reset() {
    if (state.timer) {
        clearTimer()
    }
    endBeep.pause(); 
    endBeep.currentTime = 0;
    setState(initialState)
}

function clearTimer() {
    clearInterval(state.timer);
    setState({ timer: NaN });
}