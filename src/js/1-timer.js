import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputData = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const field = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerId = null;

button.classList.add('not-activated');
button.disabled = true;

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      iziToast.show({
        backgroundColor: '#ef4040',
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        message: 'Please choose a date in the future',
        close: false,
      });
      button.disabled = true;
      button.classList.replace('on-active', 'not-activated');
    } else {
      console.log(userSelectedDate.selectedDates[0]);
      button.disabled = false;
      button.classList.replace('not-activated', 'on-active');
    }
  },
};

function handleButton() {
  timerId = setInterval(() => {
    const countdown =
      userSelectedDate.selectedDates[0].getTime() - new Date().getTime();
    button.disabled = true;
    inputData.disabled = true;
    button.classList.replace('on-active', 'not-activated');
    const time = convertMs(countdown);

    field.days.textContent = addLeadingZero(time.days);
    field.hours.textContent = addLeadingZero(time.hours);
    field.minutes.textContent = addLeadingZero(time.minutes);
    field.seconds.textContent = addLeadingZero(time.seconds);

    if (countdown < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const userSelectedDate = flatpickr(inputData, options);
button.addEventListener('click', handleButton);
