import { For } from "solid-js";
import { projectArray } from "../../projectArray";
import Project from "./Project";

export default function List() {
    return (
        <For each={projectArray.slice(0, 4)}>
            {(item, idx) =>
                <Project
                    idx={idx()}
                    project={item}
                    withToggle={false}
                />
            }
        </For>
    )
}