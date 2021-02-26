const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  isActive: false,
  intervalId: null,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      let changeColor = document.body;
      let index = randomIntegerFromInterval(0, colors.length - 1);
      changeColor.style.backgroundColor = colors[index];
      // console.log(changeColor);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));
