/*Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const lista_invitati = ['s', 'Ugo', 'Giovanni', 'Arianna', 'Pippo', 'Paperina', 'Ciccio', 'a'];

const nome_utente = prompt('Ciao! Come ti chiami?');

for (let i = 0; i < lista_invitati.length; i++){

    if (nome_utente == lista_invitati[i]){
        console.log('Prego! Sei sulla lista!');
        break;
    } 

    if (i == (lista_invitati.length - 1)){
        console.log('Non puoi entrare');
        
    } 

}

