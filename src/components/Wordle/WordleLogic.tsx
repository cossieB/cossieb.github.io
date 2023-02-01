import { createEffect, onCleanup } from "solid-js";
import Blocks from "./Blocks";
import Keyboard from "./Keyboard";
import { addLetter, backspace, endGame, flipOver, nextGuess, state } from "./store";

const alphabet = "qwertyuiopasdfghjklzxcvbnm"
const letters = alphabet.split('')
export const topRow = letters.slice(0, 10)
export const middleRow = letters.slice(10, 19)
export const bottomRow = letters.slice(19, 26)

export default function WordleLogic() {
    createEffect(() => {
        document.addEventListener('keydown', handleKeypress);
    })
    onCleanup(() => {
        document.removeEventListener('keydown', handleKeypress)
    })
    function handleKeypress(e: KeyboardEvent) {
        if (state.inputDisabled) return;
        if (e.key == "Backspace") return backspace()
        if (e.key == "Enter") return handleEnter()
        if (!letters.includes(e.key)) return;
        return addLetter(e.key)
    }
    function handleEnter() {
        if (state.currentGuess.length != 5) {
            return
        }
        flipOver()

        setTimeout(() => {
            if (state.word() == state.currentGuess) {
                endGame('won')
            }
            else if (state.activeRow == 5) {
                endGame('lost')
            }
            else {
                nextGuess()
            }
        }, 1750)
    }

    return (
        <>
            <Blocks />
            <Keyboard
                handleEnter={handleEnter}
            />
        </>
    )
}