export type ClickEvent<T = Element> = MouseEvent & {
    currentTarget: T;
    target: Element;
}