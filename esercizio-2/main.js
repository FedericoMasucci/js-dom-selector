const chiudi = document.querySelector('#chiudi');
const notifica = document.querySelector('#notifica');


chiudi.addEventListener('click', () => {
    notifica.remove();

})