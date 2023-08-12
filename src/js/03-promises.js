function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// Пример использования Notiflix для отображения уведомлений
function showNotification() {
  Notiflix.Notify.success('Уведомление успешно отображено!');
}

// Вызов функции при клике на кнопку "Показать уведомление"
const showButton = document.getElementById('showButton');
showButton.addEventListener('click', showNotification);
