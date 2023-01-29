import { Links } from "./Links"
import type { ProjectWithIndex } from "./types"

export default function Project(props: ProjectWithIndex) {
    return (
        <div class={props.idx % 2 == 0 ? 'tile' : 'tile reverse'} >
            <img src={props.project.img} alt={props.project.title} />
            <div>
                <h3> {props.project.title} </h3>
                <p> {props.project.description} </p>
            <Links {...props} />
            </div>
        </div>
    )
}
