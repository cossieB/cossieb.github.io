import { createEffect } from "solid-js";
import { addLetter, state } from "./store";
import styles from "../../styles/Wordle.module.scss"

interface P1 {
    letter: string
}

export default function Key(props: P1) {

    let ref: HTMLDivElement;

    createEffect(() => {
        color()
    })

    function color() {

        if (ref.classList.contains(styles.correct)) return

        const className = getClassName();
        if (className) {
            ref.className = `${styles.key} ${className}`
        }

        function getClassName() {
            let className = "";
            for (let guess of state.guessList) {
                for (let i = 0; i < guess.length; i++) {

                    if (guess[i] != props.letter) continue;
                    if (state.word()[i] == props.letter) {
                        return styles.correct;
                    }
                    else if (state.word().includes(props.letter)) {
                        className = styles.ok;
                    }
                    else {
                        className = styles.wrong;
                    }
                }
            }
            return className
        }
    }
    return (
        <div
            ref={ref!}
            class={`${styles.key}`}
            onClick={() => {
                !state.inputDisabled && addLetter(props.letter)
            }}
        >
            {props.letter.toUpperCase()}
        </div>
    )
}