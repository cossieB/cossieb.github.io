import { createSignal, For, Setter } from "solid-js"
import styles from "../styles/signup.module.scss";

interface P56467484 {
    className: string
}

export const [username, setUsername] = createSignal("");

export default function Signup(props: P56467484) {
    const [tempname, setTempName] = createSignal(username())
    const [errorMsg, setErrorMsg] = createSignal<string[]>([])

    function submit() {
        let e = []
        if (tempname().length > 12 || tempname().length < 3) {
            e.push("Username must be between 3 and 12 characters long.")
        }
        if (/^[^a-z]/i.test(tempname())) {
            e.push("Username must start with a letter.")
        }
        if (/\W/.test(tempname())) {
            e.push("Username can only contain letters and numbers.")
        }

        if (e.length == 0) return setUsername(tempname())
        setErrorMsg(e)
    }
    return (
        <div id={styles.signupForm} class={props.className || ""} >
            <h4>Enter Your Name</h4>
            <input
                oninput={(e) => {
                    setErrorMsg([])
                    setTempName(e.currentTarget.value);
                }}
            /><br />
            <button class={styles.button2} onClick={submit}>Submit </button>
            {errorMsg().length > 0 &&
                <div id={styles.errorDiv}>
                    <For each={errorMsg()} >
                        {item => <p> {item} </p>}
                    </For>
                </div>}
        </div>
    )
}