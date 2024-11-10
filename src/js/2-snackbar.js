import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElement = document.querySelector('.form');

const handleSubmit = event => {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
};
formElement.addEventListener('submit', handleSubmit);
