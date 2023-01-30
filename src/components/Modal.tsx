import { onMount, onCleanup, JSXElement } from "solid-js";
import { Portal } from "solid-js/web";

type P = {
    children: JSXElement;
    cleanup?: () => void
}

export default function Modal({ children, cleanup }: P) {
    let ref: HTMLDivElement;
    onMount(() => {
        ref.className = "modal";
        (document.querySelector('body'))!.style.overflow = 'hidden'
        ref.onclick = function (e) {
            if (e.target == ref) {
                close()
            }
        }
        setTimeout(() => {
            ref.style.right = '0px'
        }, 10)
    })
    onCleanup(() => {
        document.querySelector('body')!.removeAttribute('style')

    })
    function close() {
        ref.removeAttribute('style');
        cleanup &&
        setTimeout(() => {
            cleanup()
        }, 450)
    }
    return (
        <Portal
            ref={ref!}
        >
            {children}
            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </Portal>
    )
}