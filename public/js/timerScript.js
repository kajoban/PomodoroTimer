    //https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

    var interval;
    var paused = false;

    function startTimer(duration, display) {


        var timer = duration;
        var minutes;
        var seconds;

        interval = setInterval(function () {
            if (!paused) {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = 0;
                    display.textContent = "DONE"
                    alert("Duration Complete!");
                }
            }
        }, 1000);

    }

    function newClock(startTime) {
        clearInterval(interval);
        var seconds = startTime,
            display = document.querySelector('#time');
        startTimer(seconds, display);
    };

    function initStart(startTime){
        document.getElementById("pomodoro").disabled = false;
        document.getElementById("shortBreak").disabled = false;
        document.getElementById("longBreak").disabled = false;
        document.getElementById("pauseButton").disabled = false;
        document.getElementById("resetButton").disabled = false;
        document.getElementById("startButton").disabled = true;
        clearInterval(interval);
        var seconds = startTime,
            display = document.querySelector('#time');
        startTimer(seconds, display);
    }

    function isPaused() {
        if (!paused) {
            paused = true;
            document.getElementById("pomodoro").disabled = true;
            document.getElementById("shortBreak").disabled = true;
            document.getElementById("longBreak").disabled = true;
            document.getElementById("resetButton").disabled = true;
            document.getElementById("pauseButton").innerHTML = "Unpause";
        } else {
            paused = false;
            document.getElementById("pomodoro").disabled = false;
            document.getElementById("shortBreak").disabled = false;
            document.getElementById("longBreak").disabled = false;
            document.getElementById("resetButton").disabled = false;
            document.getElementById("pauseButton").innerHTML = "Pause";
        }
    }