import type { Projs } from "../../projectArray"

export type Props = {
    project: Projs
    withToggle: boolean
}

export type ProjectWithIndex = Props & {
    idx: number
}
