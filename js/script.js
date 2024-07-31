console.log('JS OK');

/*
1. Recupero elementi dal DOM
2. Preparo tre variabili: una per il prezzo, e due per gli sconti
3. Chiedo all'utente i km da percorrere
4. Chiedo all'utente l'età
5. Genero il prezzo del biglietto moltiplicando i km per la variabile prezzo
6. Verifico che l'utente sia un minore o un over65 e nel caso applico lo sconto relativo
7. Inserisco il prezzo nell'elemento del DOM
*/

//Recuper elementi dal DOM
const resultTravelLenght = document.getElementById('travel-lenght');
console.log(resultTravelLenght);

const resultUserAge = document.getElementById('user-age');
console.log(resultUserAge);

const resultOriginalPrice = document.getElementById('price-before-discount');
console.log(resultOriginalPrice);

const resultFinalPrice = document.getElementById('price-after-discount');
console.log(resultFinalPrice);