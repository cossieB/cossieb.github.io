export interface P335320 {
    user: string,
    time: number,
    flips: number
    gameSize: number
}

// export interface P33532 extends P335320 {
//     setFinished: React.Dispatch<React.SetStateAction<boolean>>,
//     setUser: React.Dispatch<React.SetStateAction<string>>,
// }
export interface P24235 {
    leaders: Times[],
    header: string
}
export interface Times {
    name: string,
    date: Date,
    time: number,
    flips: number,
    total: number,
    gameSize: number
}


// export interface P32453 {
//     time: number,
//     setTime: React.Dispatch<React.SetStateAction<number>>
// }
// export interface P54424 {
//     time: number,
//     setTime: React.Dispatch<React.SetStateAction<number>>,
//     setFinished: React.Dispatch<React.SetStateAction<boolean>>
//     flips: number,
//     setFlips: React.Dispatch<React.SetStateAction<number>>
// }