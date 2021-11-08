const output = document.getElementById('output');
const min = document.getElementById('min');
const max = document.getElementById('max');
const button = document.getElementById('generate');
const resetBt = document.getElementById('reset');
const repeat = [];

button.addEventListener('click', generate);
resetBt.addEventListener('click', reset);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate (event) {
    event.preventDefault();
    let inputminValue = min.value;
    let inputmaxValue = max.value;
    if (repeat.length === (inputmaxValue - inputminValue + 1)) {
        output.innerText = 'Elements are over';
        button.setAttribute('disabled', 'disabled');
            min.setAttribute('disabled', 'disabled');
            max.setAttribute('disabled', 'disabled');
        return;
    }
   if (inputminValue.length === 0 && inputmaxValue.length === 0) {
       output.innerText = 'Value must not be empty';
       return;
   }
    inputminValue = Number(inputminValue);
    inputmaxValue = Number(inputmaxValue);
           if  (inputmaxValue <= inputminValue) {
               output.innerText = 'Error';
               return;
           }
           if (Number.isInteger(inputminValue) === false && Number.isInteger(inputmaxValue) === false) {
               output.innerText = 'Only integer';
               return;
           }
    const random = getRandom(inputminValue, inputmaxValue);
           if (!repeat.includes(random)) {
               repeat.push(random);
               output.innerText = random;
               return;
           }
}
    function reset(event) {
        event.preventDefault();
        output.innerText = '';
        inputminValue = '';
        inputmaxValue = '';
        repeat.length = 0;
        button.removeAttribute('disabled');
        min.removeAttribute('disabled');
        max.removeAttribute('disabled');
    }





