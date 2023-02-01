import { createStore } from "solid-js/store";
import { words } from "./words";

const [state, setState] = createStore({
    wordIndex: 0,
    activeRow: 0,
    currentGuess: "",
    guessList: [] as string[],
    inputDisabled: false,
    status: 'playing' as 'playing' | 'won' | 'lost',
    word: () => words[state.wordIndex]
})

export const word = () => words[state.wordIndex]

export function addLetter(letter: string) {
    if (state.currentGuess.length < 5) {
        setState('currentGuess', state.currentGuess + letter)
    }
}

export function backspace() {
    if (state.currentGuess.length > 0) {
        setState('currentGuess', state.currentGuess.slice(0, state.currentGuess.length - 1))
    }
}

export function flipOver() {
    if (state.guessList.length < 6) {
        setState({
            guessList: [...state.guessList, state.currentGuess],
            inputDisabled: true
        })
    }
}
export function nextGuess() {
    setState({
        inputDisabled: false,
        activeRow: state.activeRow + 1,
        currentGuess: ""
    })
}
export function endGame(payload: typeof state.status) {
    setState({
        inputDisabled: true,
        status: payload
    })
}
export function nextWord() {
    setState({
        wordIndex: state.wordIndex + 1,
        activeRow: 0,
        currentGuess: "",
        guessList: [],
        inputDisabled: false,
        status: 'playing',
    })
}

export {state}