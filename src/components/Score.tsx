import styles from "../styles/Score.module.scss"

interface Props {
    item: {
        name: string,
        score: number,
        date: Date
    }
}

export default function ({ item }: Props) {
    return (
        <div class={styles.leadership} >
            <div><strong>{item.name}</strong></div>
            <div>{item.score}</div>
            <div>{item.date.toLocaleString('en-za', { day: "2-digit", month: 'short', year: 'numeric' }) + " " + item.date.toLocaleTimeString('en-za')}</div>
        </div>
    )
}