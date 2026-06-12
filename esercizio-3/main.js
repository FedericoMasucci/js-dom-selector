const button = document.querySelector('#conta');
let contatore = 0;

button.addEventListener('click', () => {
    contatore++;
    button.textContent = `Click: ${contatore}`;


})