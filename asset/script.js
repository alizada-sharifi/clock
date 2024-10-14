let second = document.querySelector(".sec");
let minute = document.querySelector(".min");
let hour = document.querySelector(".hour");
let deg = 6;
setInterval(clockHandler, 1000);
function clockHandler() {
  let date = new Date();
  let s = date.getSeconds() * deg;
  let m = date.getMinutes() * deg;
  let h = date.getHours() * 30;
  second.style.transform = `rotatez(${s}deg)`;
  minute.style.transform = `rotatez(${m}deg)`;
  hour.style.transform = `rotatez(${h + m / 12}deg)`;
}
