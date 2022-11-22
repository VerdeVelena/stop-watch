// definet var-s to hold time value
const STOPPED = "stopped";
const RUNNING = "running";

let seconds = 0;
let minutes = 0;
let hours = 0;
let status = STOPPED;

setInterval(stopWatch, 1000);

// function ( to formated time values)
// var1
// function format(val) {
// 	if (val < 10) {
// 		return "0" + val;
// 	}
// 	return val;
// }

// var2

document.getElementById("startStop").addEventListener("click", (ev) => {
	toggleStatus();
	toggleButtonText();
});

document.getElementById("reset").addEventListener("click", resetStopWatch);

function format(val) {
	return ("0" + val).slice(-2);
}

// function (logic to determin when to increment next value)
function stopWatch() {
	if (status === STOPPED) {
		return;
	}
	seconds++;

	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;
	}
	if (minutes / 60 === 1) {
		minutes = 0;
		hours++;
	}

	render();
}

// display update time values to user
function render() {
	document.getElementById("display").textContent =
		format(hours) + ":" + format(minutes) + ":" + format(seconds);
}

function toggleStatus() {
	if (status === STOPPED) {
		status = RUNNING;
	} else {
		status = STOPPED;
	}
}

function toggleButtonText() {
	const buttonEl = document.getElementById("startStop");
	if (status === STOPPED) {
		buttonEl.innerText = "Start";
	} else if (status === RUNNING) {
		buttonEl.innerText = "Stop";
	}
}

function setToZero() {
	seconds = 0;
	minutes = 0;
	hours = 0;
}

function resetStopWatch() {
	status = STOPPED;
	setToZero();
	toggleButtonText();

	render();
}
