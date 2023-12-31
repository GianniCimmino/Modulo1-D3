//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 5
let num2 = 10
let result 

result = `${num1} E' più piccolo di ${num2}`

console.log(result)

if (num1 < num2){
  result = `${num1} E' più piccolo di ${num2}`
}
else {
  result = "La condizione non è verificata"
}

console.log(result)


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myNum = 21

if (myNum < 5) {
  console.log(myNum = "Tiny")
}

else if (myNum < 10) {
  console.log(myNum = "Small")
}

else if (myNum < 15) {
  console.log(myNum = "Medium")
}

else if (myNum < 20) {
  console.log(myNum = "Large")
}

else {
  myNum >= 20
  console.log("Huge")
}



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 0; i <= 10; i++)
{
  if (i === 3){
    continue;
  }
  if (i === 8){
    continue;
  }
  console.log(i);
}


/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 0; i <= 15; i++)
{
  if (i % 2 === 0){
    console.log(i + " " + "Il numero è pari")
  }
  else if (i % 2 !== 0){
    
    console.log(i + " " + "Il numero è dispari")
  }

}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione
   sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let q1 = 5
let q2 = 5

if (q1 === 8 || q2 === 8 || q1 + q2 === 8 || q1 - q2 === 8){
  console.log("Uno dei numeri interi è 8")
}
else {
  console.log("Uno dei numeri interi non è 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
(altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let r1 = 20
let r2 = 30

let totalShoppingCart = r1 + r2 

let blackFriday = totalShoppingCart / 100 * 20

totalShoppingCart = totalShoppingCart - blackFriday

console.log(totalShoppingCart)

if (totalShoppingCart >= 50) {
  console.log("Lei ha diritto alla spedizione gratuita!")
}
else {
  console.log("Purtroppo non ha diritto alla spedizione gratuita, le saranno addebitati 10 euro per la spedizione.")
}


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente,
  se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let gender = "Female"
let isMale = gender == 'Male' ? 'Male' : 'Female'

console.log(isMale)


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!),
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe,
  stampa "FizzBuzz".
*/

for (let i = 0; i <= 100; i++) {

  if (i % 3) {
    console.log("Fizz")
  }

  else if (i % 5){
    console.log("Buzz")
  }
  if (i % 3 && i % 5) {
    console.log("FizzBuzz")
  }
}

