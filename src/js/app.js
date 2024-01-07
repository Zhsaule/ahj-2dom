// Импорт
import goblinImage from '../img/goblin.png';
import createField from './field';

// Размер игрового поля 4х4
const size = 4;
const field = createField(size);
document.body.appendChild(field);

const cells = document.querySelectorAll('.cell');

// Генерация персонажа
const character = document.createElement('img');
character.src = goblinImage;
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
field.addEventListener('click', (event) => {
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
