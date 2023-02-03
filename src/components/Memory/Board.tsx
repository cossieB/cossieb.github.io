import Card from "./Card";
import styles from "../../styles/memory.module.scss";
import { ISvg, svgs } from "./svgs";
import { createEffect, createSignal, For, Index } from "solid-js";
import shuffleArray from "../../lib/shuffleArray";
import { state } from "./store";
import { createStore } from "solid-js/store";

export default function Board() {
    let ref: HTMLDivElement
    const [cards, setCards] = createStore<ISvg[]>([])

    createEffect(() => {
        const deck = selectCards();
        const shuffled = shuffleArray([...deck, ...deck]);
        setCards(shuffled); 
        adjustGrid()
    })

    function selectCards() {
        const arr: typeof svgs = [];
        const localCopy = [...svgs];
        while (arr.length < state.gameSize * 5) {
            let i = Math.floor(Math.random() * localCopy.length)
            arr.push(...localCopy.splice(i, 1))
        }
        return arr
    }
    
    function adjustGrid() {
        let columns: [number, number]
        const { gameSize: size } = state
        if (size <= 2)
            columns = [5, 5]
        else if (size == 3)
            columns = [6, 5]
        else
            columns = [8, 5]

        if (window.innerWidth > 768) {
            ref!.style.gridTemplateColumns = `repeat(${columns[0]}, auto)`
        }
        else {
            ref!.style.gridTemplateColumns = `repeat(${columns[1]}, auto)`
        }
    }

    return (
        <div ref={ref!} id={styles.memoryBlock}>
            <Index each={cards}>
                {(card, idx) =>
                    <Card
                        index={idx}
                        card={card()}
                    />}
            </Index>
        </div>
    )
}