import { createSignal } from "solid-js";
import Modal from "../Modal";

const [state, setState] = createSignal<"idle" | "sending" | "success" | "error">("idle")

export default function Contact() {
    let form: HTMLFormElement
    async function submit(e: SubmitEvent) {
        e.preventDefault()
        const fd = new FormData(form!);
        const body: any = {}
        fd.forEach((val, key) => {
            body[key] = val
        })
        try {
            const response = await fetch('https://cossie.netlify.app/api/email', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "appliction/json"
                },
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            setState('success')

        }
        catch (error) {
            setState('error')
        }
    }
    return (
        <>
            <form ref={form!} onSubmit={submit}>
                <div class="formControl">
                    <input type="text" name="name" id="name" required />
                    <label for="name">Name</label>
                </div>
                <div class="formControl">
                    <input type="text" name="company" id="company" required />
                    <label for="company">Organization</label>
                </div>
                <div class="formControl">
                    <input type="email" name="email" id="email" required />
                    <label for="email">E-mail</label>
                </div>
                <div class="formControl">
                    <textarea name="msg" id="msg" ></textarea>
                    <label for="msg">Message</label>
                </div>
                <button
                    disabled={state() == "sending"}
                    type="submit"
                >
                    Submit
                </button>
            </form>
            {(state() == "error" || state() == "success") &&
                <Modal cleanup={() => setState("idle")}>
                    {state() == 'error' ? "Something went wrong please try again later" : "Your message has been sent. Thank you for reaching out to me. I will come back to you as soon as possible. "}
                </Modal>
            }
        </>
    )
}
