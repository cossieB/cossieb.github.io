import type { Elem } from "./ControlElem";

export const numbers = new Array(16).fill(0).map((_, i) => i)

export default function createBlock(array: Elem[]) {
    const empties = numbers.filter(num => !array.map(t => t.index()).includes(num));
    const tempIndex = Math.floor(Math.random() * empties.length);
    const index = empties[tempIndex];
    const top = Math.floor(index / 4);
    const left = index % 4;
    const id = Math.floor(Math.random() * 1000000).toString()
    const value = Math.random() < 0.75 ? 2 : 4;

    return {id, value, top, left, index() {
        return 4 * this.top + this.left
    }}
}