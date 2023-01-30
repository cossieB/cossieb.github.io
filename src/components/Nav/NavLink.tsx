import type { JSXElement } from "solid-js";

interface Props {
    label: string;
    href: string;
    icon: JSXElement
}

export default function NavLink(props: Props) {
    return (
        <div class="navDiv">
            <a href={props.href}>
                {props.icon}
                <span class="navText">{props.label}</span>
            </a>
        </div>

    )
}