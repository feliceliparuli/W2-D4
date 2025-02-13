/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const area = l1 * l2;
  console.log("L'area del rettangolo è " + area);
};
area(3, 6);
area(12, 10);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  let crazySum = 0;
  if (n1 !== n2) {
    crazySum = n1 + n2;
  } else {
    crazySum = (n1 + n2) * 3;
  }
  console.log("Il risultato è " + crazySum);
};
crazySum(4, 5);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  let crazyDiff = 0;
  if (n1 <= 19) {
    crazyDiff = 19 - n1;
  } else {
    crazyDiff = (19 - n1) * 3;
  }
  console.log("Il risultato è " + crazyDiff);
};
crazyDiff(21);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};
boundary(8);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già 
 con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  if (string.indexOf("Epicode")) {
    console.log("Epicode " + string);
  } else {
    console.log(string);
  }
};
epify("Epicode");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n % 3 === 0 && n % 7 === 0) {
    console.log("Il numero è un multiplo di 3 e 7");
  } else if (n % 3 === 0) {
    console.log("Il numero è un multiplo di 3");
  } else if (n % 7 === 0) {
    console.log("Il numero è un multiplo di 7");
  } else {
    console.log("Il numero non è un multiplo né di 3 né di 7");
  }
};
check3and7(21);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
  const stringSplit = string.split("");
  const stringReverse = stringSplit.reverse();
  const stringJoin = stringReverse.join("");
  console.log(stringJoin);
};
reverseString("aiuto");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
  let stringSplit = string.split("");
  for (let i = 0; i < stringSplit; i++) {
    if ((stringSplit[i] = " ")) {
      stringSplit[i++].toUpperCase();
    }
  }
  console.log(stringSplit);
};
upperFirst("ciao felice");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  let stringa = string.slice(1, -1);
  console.log(stringa);
};
cutString("felice");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let randomNumbers = [];
  if (n > 0 && n <= 10) {
    for (let i = 0; i < n; i++) {
      randomNumbers.push(Math.floor(Math.random() * 11));
    }
  }
  console.log(randomNumbers);
};

giveMeRandom(8);
