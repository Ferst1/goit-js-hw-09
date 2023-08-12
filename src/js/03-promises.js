import Notiflix from 'notiflix';

Notiflix.Notify.init();

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delayInput = parseInt(event.target.elements.delay.value);
  const stepInput = parseInt(event.target.elements.step.value);
  const amountInput = parseInt(event.target.elements.amount.value);

  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, delayInput + (i - 1) * stepInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// ----------------------------------------

// amount = 5;
// delay = 1000;
// step = 500;

// createPromise(1, 1000);
// createPromise(2, 1500);
// createPromise(3, 2000);
// createPromise(4, 2500);
// createPromise(5, 3000);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     ('Промис выполнен успешно');
//     position, delay;
//     // Fulfill
//   } else {
//     reject('some error');
//     // Reject
//   }
//   1500;
// }

// Promise.then(onFulfilled, onRegected);

// // Пример использования Notiflix для отображения уведомлений
// function showNotification() {
//   Notiflix.Notify.success('Уведомление успешно отображено!');
// }

// Вызов функции при клике на кнопку "Показать уведомление"
const showButton = document.getElementById('showButton');
showButton.addEventListener('click', showNotification);
