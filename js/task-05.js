// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 

// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', newNameInput)

function newNameInput(event) {

    refs.nameOutput.textContent = event.currentTarget.value;

    if(event.currentTarget.value === "") {
        refs.nameOutput.textContent = "Anonymous";
    }
}
