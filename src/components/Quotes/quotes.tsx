import { createSignal } from "solid-js";
import { quotes, QuoteType } from "./quotelist";
import styles from "../../styles/quotes.module.scss"

const elems = quotes.length

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
    '#ffae11',
    '#ff5c1e',
    '#4637ed',
    '#28bb1b'
]

const bgs: string[] = []
for (let i = 1; i <= 5; i++) {
    bgs.push(`/assets/image${i}.jpg`)
}
const bgLength = bgs.length;
const colorLength = colors.length;

export default function Quotes() {
    const [bgIndex, setBgIndex] = createSignal(Math.floor(Math.random() * bgs.length))
    const background = () => bgs[bgIndex()]

    const [mobileBG, setMobileBG] = createSignal(Math.floor(Math.random() * colors.length))
    const color = () => colors[mobileBG()]

    const [index, setIndex] = createSignal(Math.floor(Math.random() * elems))
    const quote = () => quotes[index()]

    function next() {
        setIndex(Math.floor(Math.random() * elems))
        setBgIndex(Math.floor(Math.random() * bgs.length))
        setMobileBG(Math.floor(Math.random() * colors.length))
    }
    return (
        <main style={{ background: window.innerWidth > 768 ? `url(${background()})` : color() }} id={styles.quoteContainer} class={styles.container} >
            <Quote quote={quote} color={color} next={next} /> 
        </main>
    )
}

interface P {
    color: () => string,
    quote: () => QuoteType,
    next(): void
}

function Quote(props: P) {
    return (
        <div style={{color: props.color()}} id={styles["quote-box"]} >
            <div id={styles.text}>
                <h1>{props.quote().quote}</h1>
            </div>
            <div id={styles.author}>
                <h2>- {props.quote().author}</h2>
            </div>
            <div id={styles.quoteButtons}>
                <div id={styles.socialButtons}>
                    <a id={styles["tweet-quote"]} title="Tweet this quote" class={styles.shareQuotes} href={`https://twitter.com/intent/tweet?text="${props.quote().quote}" - ${props.quote().author}`} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={props.color()} class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a class={styles.shareQuotes} title="Post on tumblr" href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + props.quote().author + "&content=" + props.quote().quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} target="_blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill={props.color()} width={40} height="40" xmlns-xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 260 260" xml-space="preserve">
                            <path d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511  c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543  h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397  c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769  c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026  c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567  c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417  C213.484,200.108,212.476,198.418,210.857,197.545z" />
                        </svg>
                    </a>
                </div>
                <button style={{background: props.color()}} id={styles["new-quote"]} onClick={props.next} >Next Quote</button>
            </div>
        </div>
    )
}

