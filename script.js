let countDownDate = new Date(2023, 2, 11, 22, 10);

let x = setInterval(function () {
  let current = new Date();
  let timeLeft = countDownDate - current;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (days < 5) {
    document.getElementById("timer").innerHTML =
      days + "дні " + hours + "год " + minutes + "хв " + seconds + "сек ";
  }
  if (days === 1) {
    document.getElementById("timer").innerHTML =
      days + "день " + hours + "год " + minutes + "хв " + seconds + "сек ";
  }
  if (days >= 5) {
    document.getElementById("timer").innerHTML =
      days + "днів " + hours + "год " + minutes + "хв " + seconds + "сек ";
  }
  if (timeLeft <= 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "ВОНА ВЖЕ ТУТ";
  }
}, 1000);
