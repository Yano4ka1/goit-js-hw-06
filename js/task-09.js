
// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

changeColorEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  colorEl.textContent = color;
}