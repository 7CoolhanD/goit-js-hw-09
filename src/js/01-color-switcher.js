const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
const DELAY = 1000;
let timeOutId = null;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtn() {
  timeOutId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.disabled = true;
    console.log('start');
  }, DELAY);
}
function onStopBtn() {
  clearInterval(timeOutId);
  refs.startBtn.disabled = false;
  console.log('stop');
}
