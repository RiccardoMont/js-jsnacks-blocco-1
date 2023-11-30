/* Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */


const odd_numbers = [];

for (let i = 0; i < 6; i++){

    const num = Number(prompt('Inserisci un numero'));

    if (num % 2 != 0){

        odd_numbers.push(num);

        console.log(odd_numbers);

    }


}