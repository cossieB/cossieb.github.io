export interface PomState {
    breakMin: number;
    sessionMin: number;
    seconds: number;
    break: number;
    running: boolean;
    left: string;
    breakTime: string;
    sessionLength: number;
    sound: string;
}

export interface PomProp {
    prop?: any
}