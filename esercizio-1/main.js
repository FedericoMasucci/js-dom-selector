const button = document.querySelector('#aggiungi');
const input = document.querySelector('#nuovo-articolo');
const lista = document.querySelector('#lista');



button.addEventListener('click', () => {
    const inputTesto = input.value.trim();
    // .value serve per prendere l'input, .trim per togliere solo gli spazi all'inizio e alla fine 
    if (inputTesto !== "") { // vediamo se l'input è nullo
        const newLi = document.createElement('li');
        // . createElement serve per creare tag html invisibili
        newLi.textContent = inputTesto;
        // .textContent È una proprietà di JavaScript che rappresenta il testo visibile contenuto all'interno di un elemento HTML.
        lista.appendChild(newLi);
        // .appendChild serve a prendere un elemento HTML e inserirlo all'interno di un altro elemento, posizionandolo alla fine di tutti i figli già esistenti.
        input.value = "";
        input.focus();
    }
})