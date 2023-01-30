import { Links } from "./Links";
import type { ProjectWithIndex, Props } from "./types";

export function SmallProject(props: ProjectWithIndex) {
    return (
        <div class="smallTile">
            <img src={props.project.img} alt={props.project.title} loading="lazy" />
            <h3> {props.project.title} </h3>
            <div class="mask" />
            <Links {...props} />
        </div>
    );
}
