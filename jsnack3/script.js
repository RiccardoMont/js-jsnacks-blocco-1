/*Snack n3 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const chosenNumbers = [];


for (let i = 0; i < 10; i++){
    const newNumber = chosenNumbers.push(Number(prompt('Inserisci un numero')));

    if (i === 9){

    let sommatoria = 0;

        for(let x = 0; x < 10; x++){

        sommatoria +=  chosenNumbers[x];
        console.log(sommatoria);
        
        }

    }
}

console.log(chosenNumbers);