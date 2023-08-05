// I am going to make Stop Watch

let secEl = document.getElementById("seconds");
let minEl = document.getElementById("minutes");
let hourEl = document.getElementById("hours");
let dayEl = document.getElementById("days");
let buttonEl = document.getElementById("button");

let count = 0;
let minute = 0;
let hour = 0;
let day = 0;
let id = 0;
function stopWatch() {
    id = setInterval(() => {
        count = count + 1;
        secEl.innerText = count;
        // console.log(count);
        if (count == 60) {
            count = 0;
            minute = minute + 1;
            minEl.innerText = minute;
            // console.log(minute);
            if (minute == 60) {
                minute = 0;
                hour = hour + 1;
                hourEl.innerText = hour;
                // console.log(hour);
            }
            if (hour == 24) {
                hour = 0;
                day = hour + 1;
                dayEl.innerText = hour;
                // console.log(hour);
            }
        }
    }, 1000);
}

// buttonEl.addEventListener("click", stopWatch);
// // buttonEl.removeEventListener("dblclick", stopWatch);

// buttonEl.addEventListener("keydown", () => {
//     clearInterval(id);
// })







