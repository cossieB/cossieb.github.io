import { For } from "solid-js";
import { projectArray } from "../../projectArray";
import Details from "./Details";
import { SmallProject } from "./SmallProject";
import { selected } from "./state";

export default function Grid() {
    return (
        <div id="smallProjects">
            <For each={projectArray.slice(4)}>
                {(item, idx) =>
                    <SmallProject
                        project={item}
                        withToggle={true}
                        idx={idx()}
                    />
                }
            </For>
            {selected() && <Details />}
        </div>
    )
}

