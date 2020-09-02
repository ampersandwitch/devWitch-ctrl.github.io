window.onload = function() {

  let minutes = 00;
  let seconds = 00;
  let tens = 00;

  const appendMinutes = document.getElementById("minutes");
  const appendSeconds = document.getElementById("seconds")
  const appendTens = document.getElementById("tens")

  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let Interval;

//buttons

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function() {
    clearInterval(Interval);
  };


  buttonReset.onclick = function() {
    clearInterval(Interval);
    minutes = "00";
    seconds = "00";
    tens = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };



  function startTimer() {

    // tenth of a second
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;

    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    };

    //seconds
    if (seconds <= 9) {
      appendSeconds.innterHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    };
  }

};
