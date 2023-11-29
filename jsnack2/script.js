/*Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt('Scrivi una parola');
const secondWord = prompt("Scrivine un'altra");
const h1 = document.getElementById('result');

const verify1 = firstWord*2;
const verify2 = secondWord*2; 

const firstWordLenght = firstWord.length;
const secondWordLenght = secondWord.length;

console.log(firstWordLenght);

if (isNaN(verify1) && isNaN(verify2)){

    if (firstWordLenght > secondWordLenght){

        h1.innerHTML = `${secondWord} è una parola più corta di ${firstWord}`;

    } else if (firstWordLenght < secondWordLenght){

        h1.innerHTML = `${firstWord} è una parola più corta di ${secondWord}`;

    } else {

        h1.innerHTML = `${firstWord} e ${secondWord} sono parole composte dallo stesso numero di caratteri`;

    }
} else {

    h1.innerHTML = `Potrebbero essere stati inseriti dei numeri`;

}
