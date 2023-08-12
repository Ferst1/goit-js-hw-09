let intervalId = null;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);

function startColorChanging() {
  if (intervalId === null) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
}

function stopColorChanging() {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

button.style.margin = 'auto';
