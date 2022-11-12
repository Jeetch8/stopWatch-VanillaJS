const minutesDisp = document.getElementById("minutes");
const secondsDisp = document.getElementById("seconds");
const hoursDip = document.getElementById("hours");
const startBtn = document.getElementById("startBtn");
const restBtn = document.getElementById("resetBtn");

let intervalId = 0;

startBtn.addEventListener("click", () => {
  if (startBtn.innerText === "Start") {
    intervalId = setInterval(() => {
      secondsDisp.innerText = Number(secondsDisp.innerText) + 1;
      if (Number(secondsDisp.innerText) === 60) {
        secondsDisp.innerText = 0;
        minutesDisp.innerText = Number(minutesDisp.innerText) + 1;
      }
      if (Number(minutesDisp.innerText === 60)) {
        hoursDip.innerText = Number(hoursDip.innerText) + 1;
      }
    }, 10);
    startBtn.innerText = "Stop";
  } else {
    startBtn.innerText = "Start";
    clearInterval(intervalId);
  }
});

restBtn.addEventListener("click", () => {
  minutesDisp.innerText = "00";
  secondsDisp.innerText = "00";
  hoursDip.innerText = "00";
});
