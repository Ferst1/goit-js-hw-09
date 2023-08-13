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
