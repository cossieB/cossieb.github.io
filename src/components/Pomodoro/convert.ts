export function convert(s: number) {
    if (s == 3600) {
        return "60:00"
    }
    let mins = Math.floor(s / 60);
    let secs = s - 60 * mins;
    return `${("0" + mins).slice(-2)}:${("0" + secs).slice(-2)}`
}