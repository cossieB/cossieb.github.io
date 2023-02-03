import PlaySudoku from "./PlaySudoku"
import CreateSudoku from "./CreateSudoku"
import styles from "../../styles/sudoku.module.scss";
import { createSignal } from "solid-js";

export const puzzleStrings = [
    '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.',
    '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
    '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1',
    '.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6',
    '82..4..6...16..89...98315.749.157.............53..4...96.415..81..7632..3...28.51',
    "2..8....5.5.1..4...34...............7..9....25....1.6.3.7..62..1....7..9.....3..4"
]

export default function Sudoku() {
    const [isModePlay, setMode] = createSignal(true)
    const [puzzleString, setPuzzleString] = createSignal(puzzleStrings[Math.floor(Math.random() * puzzleStrings.length)])

    return (
        <div id={styles.sudokuContainer}>
                {isModePlay() ?
                    <PlaySudoku
                        setMode={setMode}
                        puzzleString={puzzleString()}
                        setPuzzleString={setPuzzleString}

                    /> :
                    <CreateSudoku
                        setPuzzleString={setPuzzleString}
                        setMode={setMode}
                    />}
        </div>
    )
}
