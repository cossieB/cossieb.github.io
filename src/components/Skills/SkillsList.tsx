import { For } from "solid-js";
import { langs, frontend, backend, misc } from "./skills";
import SkillDiv from "./SkillsDiv"

export default function Skills() {
    return (
        <div id="skills">
            <For each={[...langs, ...frontend, ...backend, ...misc]}>
                {item =>
                    <SkillDiv
                        lingo={item}
                    />
                }
            </For>
        </div>
    )
}