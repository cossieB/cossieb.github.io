import { For } from "solid-js";
import { projectArray } from "../../projectArray";
import { SmallProject } from "./SmallProject";

export default function Grid() {
    return (
        <div id="smallProjects">
            <For each={projectArray.slice(4)}>
                {item =>
                    <SmallProject
                        project={item}
                    />
                }
            </For>
        </div>
    )
}