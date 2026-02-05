let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector("#time").innerText = `${h}:${m}:${s}`;
}

function runTimer(){

  seconds++;

  if(seconds === 60){
    seconds = 0;
    minutes++;
  }

  if(minutes === 60){
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function startTimer(){

  if(timer !== null) return; // prevent multiple intervals

  timer = setInterval(runTimer,1000);
}

function pauseTimer(){
  clearInterval(timer);
  timer = null;
}

function resetTimer(){

  clearInterval(timer);
  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector("#laps").innerHTML = "";

  updateDisplay();
}

function recordLap(){

  if(hours === 0 && minutes === 0 && seconds === 0) return;

  let lapTime = document.querySelector("#time").innerText;

  let li = document.createElement("li");
  li.innerText = "Lap → " + lapTime;

  document.querySelector("#laps").appendChild(li);
}

updateDisplay();

