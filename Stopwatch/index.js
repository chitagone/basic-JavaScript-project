let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = hours < 10 ? "0" + minutes : minutes;
    let s = hours < 10 ? "0" + seconds : seconds;
    displaytime.innerHTML = h + ":" + m + ":" + s;
}



function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);

}

function watchStop() {
    clearInterval(timer);

}

function WatchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00"

}