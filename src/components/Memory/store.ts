import { createStore } from "solid-js/store";

const initialState = {
    activeCards: [] as { index: number, label: string }[],
    matches: new Set<string>(),
    inputDisabled: false,
    time: 0,
    flips: 0,
    finished: false,
    gameSize: 2
}

export const [state, setState] = createStore({...initialState})

export function flipOver(payload: typeof initialState.activeCards[number]) {
    if (state.activeCards.length > 1) return;
    const updatedState: Partial<typeof initialState> = {
        activeCards: [...state.activeCards, payload],
        flips: state.flips + 1
    }
    if (state.activeCards.length == 1) 
        updatedState.inputDisabled = true;

    setState(updatedState)
}

export function correct(payload: string) {
    setState({
        matches: state.matches.add(payload),
        activeCards: [],
        flips: state.flips + 1
    })
}

export function clearActiveCards() {
    setState({
        activeCards: [],
        inputDisabled: false
    })
}

export function increaseTime() {
    setState({time: state.time + 1})
}

export function win() {
    setState({finished: true})
}

export function changeBoardSize(payload: number) {
    setState({
        gameSize: state.gameSize + payload
    })
}

export function playAgain() {
    setState({
        ...initialState,
        gameSize: state.gameSize,
        matches: new Set()
    })
}