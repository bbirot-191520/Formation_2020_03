import { hello } from './hello.js';

/** @type {HTMLInputElement} */
const inputPrenomEl = document.querySelector('.prenom');
/** @type {HTMLParagraphElement} */
const outputEl = document.querySelector('.output');

inputPrenomEl.addEventListener('input', () => {
  outputEl.innerText = hello(inputPrenomEl.value);
});
