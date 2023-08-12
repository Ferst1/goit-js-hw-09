import { Report } from 'notiflix/build/notiflix-report-aio';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnEl = document.querySelector('button[data-start]');
const hoursEl = document.querySelector('span[data-hours]');
const daysEl = document.querySelector('span[data-days]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const datetimePicker = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let userDate = selectedDates[0].getTime();
    const dateNow = new Date();
    if (userDate < dateNow.getTime()) {
      Notiflix.Notify.info('Please choose a date in the future');
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
    }
  },
});
let timerId;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days = Math.floor(ms / day);
  let hours = Math.floor((ms % day) / hour);
  let minutes = Math.floor(((ms % day) % hour) / minute);
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function updateDateTime() {
  const selectedDate = datetimePicker.selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  const difference = selectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(difference);
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
  if (difference <= 0) {
    clearInterval(timerId);
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    return;
  }
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function onBtnClick() {
  updateDateTime();
  timerId = setInterval(() => updateDateTime(), 1000);
}
btnEl.addEventListener('click', onBtnClick);

// // Описаний в документації
// import flatpickr from 'flatpickr';
// // Додатковий імпорт стилів

// import 'flatpickr/dist/flatpickr.min.css';

// import Notiflix from 'notiflix';
// const btnEl = document.querySelector('button[data-start]');
// const hoursEl = document.querySelector('span[data-hours]');
// const daysEl = document.querySelector('span[data-days]');
// const minutesEl = document.querySelector('span[data-minutes]');
// const secondsEl = document.querySelector('span[data-seconds]');

// const dateTimePicker = flatpickr("#datetime-picker", {

//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     let userDate = selectedDates[0].getTime();
//     const dateNow = new Date();

//     if (userDate < dateNow.getTime()) {

//       Notiflix.Notify.info("Please choose a date in the future");
//       btnEl.disabled = true;
//     }
//     else {
//       btnEl.disabled = false;
//     };
//   },

// });

// let timerId;

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   let days = Math.floor(ms / day);
//   Remaining hours
//   let hours = Math.floor((ms % day) / hour);
//  Remaining minutes
//   let minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
//   let seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// };

// function updateTime() {
//   const selectedDate = datetimePicker.selectedDates[0].getTime();
//   const difference = selectedDate - currentDate;
//   const {
//     days, hours, minutes, seconds } = convertMs(difference);

//   daysEl.textContent = addLeadingZero(days);
//   hoursEl.textContent = addLeadingZero(hours);
//   minutesEl.textContent = addLeadingZero(minutes);
//   secondsEl.textContent = addLeadingZero(seconds);

// if (difference <= 0) {
//   clearInterval(timerId);
//   daysEl.textContent = '00';
//   hoursEl.textContent = '00';
//   minutesEl.textContent = '00';
//   secondsEl.textContent = '00';
//   return;
// }

//   if (timeSet < 1000 && timeSet > 0) {
//                 clearInterval(timerId);
//            }
// };

// function addLeadingZero(value){
// return
// value.toString().padStart(2, '0');
// };
// function onBtnClick() {
//   updateDateTime();
//   timerId = setInterval(() => ipdatedateTime() 1000);
// };

//   const timer = document.querySelectorAll('.value'); const myInput = document.querySelector('#datetime-picker'); const button = document.querySelector('button');
// let timerId;

// button.disabled = true;
//  const options = {   enableTime: true,   time_24hr: true,   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {     const dateNow = new Date();
//     if (selectedDates[0] < dateNow) {
//       Report.failure('Please choose a date in the future');     } else {
//       button.disabled = false;
//     }
//   }, };

// flatpickr(selector, options);

// button.addEventListener('click', onClickBtn);

// function onClickBtn() {
//   const selectedDate = selector._flatpickr.selectedDates[0];
//   timerId = setInterval(() => {
//     return updateTimer(selectedDate);
//   }, 1000);
//   button.disabled = true;
// }

// function updateTimer(selectedDate) {
//   const ms = selectedDate.getTime() - Date.now();
//   const { days, hours, minutes, seconds } = convertMs(ms);

//   timer[0].textContent = formatTime(days);
//   timer[1].textContent = formatTime(hours);
//   timer[2].textContent = formatTime(minutes);
//   timer[3].textContent = formatTime(seconds);

//   function formatTime(e) {
//     return e.toString().padStart(2, '0');
//   }

//   if (ms > 0 && ms < 1000) {
//     Report.success('Time is up!');
//     return clearInterval(timerId);
//   }
// }

//

//   // Remaining days
//

//   return { days, hours, minutes, seconds };
// }

// const dateTimePicker = document.getElementById('datetime-picker');
// const startButton = document.querySelector('[data-start]');
// const timerFields = {
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let countdownInterval;

// let countdownStarted = false;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     const currentDate = new Date();
//     if (selectedDate < currentDate) {
//       alert('Please choose a date in the future');
//       startButton.disabled = true;
//     } else {
//       startButton.disabled = false;
//     }
//   },
// };

// const flatpickrInstance = flatpickr(dateTimePicker, options);

// startButton.addEventListener('click', startCountdown);

// function startCountdown() {
//   if (countdownStarted) return; // Защита от множественных кликов
//   countdownStarted = true;

//   const selectedDate = flatpickrInstance.selectedDates[0];
//   const currentDate = new Date();

//   if (selectedDate <= currentDate) {
//     alert('Please choose a date in the future');
//     return;
//   }

//   countdownInterval = setInterval(() => {
//     const msRemaining = selectedDate - new Date();
//     if (msRemaining <= 0) {
//       clearInterval(countdownInterval);
//       updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       alert('Time is up!');
//     } else {
//       const timeRemaining = convertMs(msRemaining);
//       updateTimer(timeRemaining);
//     }
//   }, 1000);
//   startButton.disabled = true;
// }

// function updateTimer(time) {
//   timerFields.days.textContent = addLeadingZero(time.days);
//   timerFields.hours.textContent = addLeadingZero(time.hours);
//   timerFields.minutes.textContent = addLeadingZero(time.minutes);
//   timerFields.seconds.textContent = addLeadingZero(time.seconds);
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// containerElement = document.getElementById('timer');
// timer.style.display = 'flex';
// timer.style.fontSize = '30px';
// timer.style.gap = '20px';
