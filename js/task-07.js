// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 

// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const inputFontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


inputFontSizeControl.addEventListener('input', onInputFontSizeControl);

function onInputFontSizeControl(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}
