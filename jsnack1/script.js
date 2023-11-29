/*Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/



const firstNumber = Number(prompt('Inserisci un numero'));
const secondNumber = Number(prompt('Inseriscine un altro'));
const h1 = document.getElementById('result');


if (isNaN(firstNumber) || isNaN(secondNumber)){

    h1.innerHTML = `I valori non sono entrambi validi`;

} else if (firstNumber > secondNumber){

    h1.innerHTML = `${firstNumber} è il numero più grande`;

} else if (firstNumber < secondNumber){

    h1.innerHTML = `${secondNumber} è il numero più grande`;

} else {

    h1.innerHTML = `${firstNumber} e ${secondNumber} sono equivalenti`;

}
