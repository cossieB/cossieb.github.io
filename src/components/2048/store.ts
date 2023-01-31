import { createStore } from "solid-js/store";
import type { Elem } from "./ControlElem";


const store = createStore<Elem[]>([])