import { createSignal } from 'solid-js';
import styles from '../../styles/memory.module.scss';
import correctAudio from "./correct.ogg";
import flipAudio from "./flip.wav"
import nopeAudio from "./nope.wav"
import { clearActiveCards, correct, flipOver, state, win } from './store';
import type { ISvg } from './svgs';

export interface P01955 {
    card: ISvg,
    index: number,
}

export default function Card(props: P01955) {
    const a = props.card.html.cloneNode(true); 
    function className()  {
        let active = state.activeCards.some(c => c.index == props.index);
        let match = state.matches.has(props.card.label);
        return active || match ? styles.show : ""
    }

    function showCard() {
        if (state.inputDisabled) return;
        if (state.activeCards.some(item => item.index == props.index) || state.matches.has(props.card.label)) {
            const audio = new Audio(nopeAudio)
            audio.volume = 0.1;
            audio.play()
            return;
        }

        let audio = new Audio()
        audio.src = flipAudio
        audio.volume = 0.1
        if (state.activeCards.length == 0) flipOver({ index: props.index, label: props.card.label })

        else if (state.activeCards.length == 1) {
            if (state.activeCards[0].label == props.card.label) {
                audio.src = correctAudio
                correct(props.card.label)
                if (state.matches.size == state.gameSize * 5) win()
            }
            else {
                flipOver({ index: props.index, label: props.card.label })
                setTimeout(() => {
                    clearActiveCards()
                }, 1250)
            }
        }
        audio.play()
    }

    return (
        <div
            id={"card" + props.index}
            onClick={showCard}
            class={`${styles.memoryCard} ${className()}`}
        >
            <div class={styles.backCard}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
                </svg>
            </div>
            <div class={styles.frontCard} style={{ background: props.card.bg }}  >
                {a}
            </div>
        </div>
    )
}