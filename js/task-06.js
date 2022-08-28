// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість смиволів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

                // #validation-input {
                //     border: 3px solid #bdbdbd;
                //   }
                //   #validation-input.valid {
                //     border-color: #4caf50;
                //   }
                //   #validation-input.invalid {
                //     border-color: #f44336;
                //   }

const validation = document.querySelector("#validation-input");

validation.addEventListener('blur', onValidationBlur);

function onValidationBlur(event) {

    const {
        value,
        dataset,
        classList,
      } = event.currentTarget;

if (value.length === Number(dataset.length)) {

  if (classList.contains("invalid")) {
      classList.remove("invalid")
    }
    classList.add("valid");
    return;
  } 

  if (classList.contains("valid")) {
    classList.remove("valid")
  }
  classList.add("invalid");
}