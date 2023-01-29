import type { JSXElement } from "solid-js";
import styles from '../styles/home.module.scss';

interface Props {
    icon: JSXElement
    href: string
    label: string
}

export default function Social({ icon, href, label }: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            title={label}
            class={styles.socialLink}
        >
            {icon}
        </a>
    )
}