import type { Projs } from "../../projectArray"

export type Props = {
    project: Projs
}

export type ProjectWithIndex = Props & {
    idx: number
}
