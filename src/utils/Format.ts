export function formatTime(timer: number) {
    let min = Math.floor(timer / 60);
    let seg = timer % 60;
    let minStr = '';
    let segStr = '';

    if (min < 10) minStr = `0${min}`;
    else minStr = `${min}`;
    if (seg < 10) segStr = `0${seg}`;
    else segStr = `${seg}`;

    return `${minStr}:${segStr}`;
}
