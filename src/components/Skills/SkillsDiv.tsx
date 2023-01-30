import type { Lang } from "./skills"
import { skillsMap } from "./skillsMap"

export default function SkillDiv({ lingo }: { lingo: Lang }) {
    const [strokeColour, summary] = skillsMap(lingo.skill)
    return (
        <div
            class='skillDiv'
        >
            <img
                class='langLogos'
                src={lingo.logo}
                alt={`${lingo.language} logo`}
                title={lingo.language} />
            <svg xlink-title="skill level"
                class="skill"
                height={50}
                width={50}
            >
                <circle
                    stroke={strokeColour}
                    stroke-dashoffset={lingo.skill / 10 * 130 - 130}
                    cx={25}
                    cy={25}
                    r={20}
                />
                <title> {summary} </title>
            </svg>
        </div>
    )
}