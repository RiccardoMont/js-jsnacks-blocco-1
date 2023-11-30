/* Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const num = prompt('Inserisci un numero di quattro cifre');

if(isNaN(num)){

    console.log('Non hai inserito un numero');

} else if (num.length == 4){

    let sum = 0;

    for(let i = 0; i < num.length; i++){

        sum += Number(num[i]);
        console.log(sum);

    }



} else {

    console.log('il numero non ha 4 cifre');

}