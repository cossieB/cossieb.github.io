import { Links } from "./Links";
import type { Props } from "./types";

export function SmallProject(props: Props) {
    return (
        <div class="smallTile">
            <img src={props.project.img} alt={props.project.title} />
            <div class="mask" />
            <Links {...props} />
        </div>
    );
}
