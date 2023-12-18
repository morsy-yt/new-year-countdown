document.addEventListener("DOMContentLoaded", function () {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const newYear = document.getElementById("newYear");

  function updateCountdown() {
    const now = new Date();
    newYear.textContent = now.getFullYear() + 1;
    const newYearDate = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = newYearDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(timeLeft / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
