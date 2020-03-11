import '../scss/app.scss';
import 'bootstrap';

import { hello } from './hello';

const inputPrenomEl = document.querySelector<HTMLInputElement>('.prenom');
const outputEl = document.querySelector<HTMLParagraphElement>('.output');

inputPrenomEl.addEventListener('input', () => {
  outputEl.innerText = hello(inputPrenomEl.value);
});
