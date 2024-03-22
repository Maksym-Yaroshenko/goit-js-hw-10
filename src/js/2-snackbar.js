// Описаний у документації
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const stateRadios = document.querySelectorAll("input[name='state']");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const timeInterval = form.elements.delay.value;

  let totalRadioInput = null;
  stateRadios.forEach(radio => {
    if (radio.checked) {
      totalRadioInput = radio.value;
    }
  });

  createPromise(timeInterval, totalRadioInput)
    .then(result =>
      iziToast.show({
        title: 'Ok',
        titleColor: 'white',
        backgroundColor: '#59a10d',
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        message: result,
        close: false,
      })
    )
    .catch(error =>
      iziToast.show({
        title: 'Error',
        titleColor: 'white',
        backgroundColor: '#ef4040',
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        message: error,
        close: false,
      })
    );

  form.reset();
}

function createPromise(delay, state) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  return promise;
}
