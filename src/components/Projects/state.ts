import { createSignal } from "solid-js";
import type { Projs } from "../../projectArray";

export const [selected, setSelected] = createSignal<Projs | null>(null)