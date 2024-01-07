/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/field.js
function createField(size) {
  const field = document.createElement('div');
  field.className = 'field';
  for (let i = 0; i < size * size; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('id', i);
    field.append(cell);
  }
  return field;
}
;// CONCATENATED MODULE: ./src/js/app.js
// Импорт



// Размер игрового поля 4х4
const size = 4;
const field = createField(size);
document.body.appendChild(field);
const cells = document.querySelectorAll('.cell');

// Генерация персонажа
const character = document.createElement('img');
character.src = goblin_namespaceObject;
character.classList.add('character');
cells[0].appendChild(character);

// Вывод результата
const output = document.createElement('div');
output.classList = 'output';
document.body.appendChild(output);
const resultDiv = document.createElement('div');
resultDiv.textContent = 'Успех: ';
output.appendChild(resultDiv);
const result = document.createElement('span');
result.className = 'success';
result.textContent = 0;
resultDiv.appendChild(result);
const attemptDiv = document.createElement('div');
attemptDiv.textContent = 'Попытки: ';
output.appendChild(attemptDiv);
const attempt = document.createElement('span');
attempt.className = 'attempt';
attempt.textContent = 0;
attemptDiv.appendChild(attempt);

// Перемещение персонажа с помощью функции setInterval
setInterval(() => {
  const randomCell = cells[Math.floor(Math.random() * size * size)];

  // Проверка, что случайная ячейка не является текущей
  if (randomCell !== character.parentElement) {
    randomCell.appendChild(character);
  }
}, 1000);
let attempts = 0;
let successfulAttempts = 0;

// Обработка кликов на ячейки игрового поля
field.addEventListener('click', event => {
  const clickedCell = event.target;
  attempts += 1;
  attempt.textContent = attempts;

  // Проверка, что ячейка содержит персонажа
  if (clickedCell.classList.contains('character')) {
    clickedCell.style.backgroundColor = 'green';
    successfulAttempts += 1;
    result.textContent = successfulAttempts;
  } else {
    clickedCell.style.backgroundColor = 'red';
  }
  setTimeout(() => {
    clickedCell.removeAttribute('style');
  }, 200);

  // Проверка, достигнуто ли ограничение в 5 попыток
  if (attempts === 5) {
    result.textContent = 0;
    attempt.textContent = 0;
    alert(`Игра закончена! Ваш результат ${successfulAttempts} гоблинов!`);
    attempts = 0;
    successfulAttempts = 0;
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;