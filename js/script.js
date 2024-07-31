console.log('JS OK');

/*
1. Recupero elementi dal DOM
2. Preparo tre variabili: una per il prezzo, e due per gli sconti
3. Chiedo all'utente i km da percorrere
4. Chiedo all'utente l'età
5. Genero il prezzo del biglietto moltiplicando i km per la variabile prezzo
6. Verifico che l'utente sia un minore o un over65 e nel caso applico lo sconto relativo
7. Inserisco il prezzo e il resto delle informazioni negli elementi del DOM
*/

//Recuper elementi dal DOM
const resultTravelLength = document.getElementById('travel-length');
console.log(resultTravelLength);

const resultUserAge = document.getElementById('user-age');
console.log(resultUserAge);

const resultOriginalPrice = document.getElementById('price-before-discount');
console.log(resultOriginalPrice);

const resultFinalPrice = document.getElementById('price-after-discount');
console.log(resultFinalPrice);

//Preparo le tre variabili

const pricePerKm = 0.21;
const minorDiscount = 0.2;
const overDiscount = 0.4;

//Chiedo all'utente i km da percorrere

const travelLength = parseInt(prompt('Quanti km vuoi percorrere?', 20));
console.log(travelLength);

//Chiedo all'utente l'età

const userAge = parseInt(prompt('Quanti hanni hai?', 20));
console.log(userAge);

//Genero il prezzo del biglietto moltiplicando i km per la variabile prezzo
const originalPrice = travelLength * pricePerKm;
console.log(originalPrice);

// Verifico che l'utente sia un minore o un over65 e nel caso applico lo sconto relativo
let finalPrice;
if(userAge < 18){
    finalPrice = originalPrice - (originalPrice * minorDiscount);
} else if(userAge > 65){
    finalPrice = originalPrice - (originalPrice * overDiscount);
}

console.log(finalPrice);

//Inserisco il prezzo e il resto delle informazioni negli elementi del DOM

resultTravelLength.innerText = 'La lunghezza del viaggio è di ' + travelLength + 'km.';
resultUserAge.innerText = 'Hai ' + userAge + ' anni.';

if(!finalPrice){
    resultFinalPrice.innerText = 'Il prezzo del tuo biglietto è ' + originalPrice.toFixed(2) + ' €';
} else{
    resultOriginalPrice.innerText = 'Il prezzo iniziale del tuo biglietto è ' + originalPrice.toFixed(2) + ' €';
    resultFinalPrice.innerText = 'Il prezzo del tuo biglietto dopo lo sconto applicato è ' + finalPrice.toFixed(2) + ' €';
}
