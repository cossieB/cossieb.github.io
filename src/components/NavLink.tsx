import type { JSXElement } from "solid-js"
import styles from "../styles/home.module.scss";

interface Props {
    icon: JSXElement
    href: string
    label: string
}

export default function NavLink({ icon, href, label }: Props) {
    return (
        <a class={styles.homepageLinks} href={href}>
            <div class={styles.navDiv}>
                {icon} &nbsp;
                <span>{label}</span>
            </div>
        </a>
    )
}