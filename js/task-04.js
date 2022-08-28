//Лічильник складається зі спану і кнопок, які по кліку повинні 
// збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// // лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
decrement: document.querySelector(`button[data-action="decrement"]`),
increment: document.querySelector(`button[data-action="increment"]`),
value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrement.addEventListener('click', onDecrementClick);
refs.increment.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
} 

function onIncrementClick() {
    counterValue += 1;
    refs.value.textContent = counterValue;
} 

console.log(onDecrementClick);
console.log(onIncrementClick);