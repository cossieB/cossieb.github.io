import { initialState, WordleState } from "./Wordle"
import { words } from "./words"

export type WorldAction = {
    type: 'ADD_LETTER',
    payload: string
} | {
    type: 'DELETE'
} | {
    type: 'FLIP_OVER'
} | {
    type: 'NEXT_GUESS'
} | {
    type: 'END_GAME',
    payload: Exclude<WordleState['status'], 'playing'>
} | {
    type: 'NEXT_WORD'
}

export default function reducer(state: WordleState, action: WorldAction): WordleState {
    switch (action.type) {
        case 'ADD_LETTER':
            if (state.currentGuess.length < 5)
                return { ...state, currentGuess: state.currentGuess + action.payload }
            else
                return state
        case 'DELETE':
            if (state.currentGuess.length > 0)
                return { ...state, currentGuess: state.currentGuess.slice(0, state.currentGuess.length - 1) }
            else
                return state
        case 'FLIP_OVER':
            if (state.guessList.length < 6)
                return {
                    ...state,
                    guessList: [...state.guessList, state.currentGuess],
                    inputDisabled: true
                }
            else
                return state
        case 'NEXT_GUESS':
            return {
                ...state,
                inputDisabled: false,
                activeRow: state.activeRow + 1,
                currentGuess: "",
            }
        case 'END_GAME':
            return { ...state, inputDisabled: true, status: action.payload }
        case 'NEXT_WORD':
            return {
                ...initialState,
                wordIndex: state.wordIndex + 1,
                word: words[state.wordIndex + 1]
            }
    }
}