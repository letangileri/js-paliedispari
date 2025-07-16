// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Steps
//- funzione isPalindromo con un parametro (parola inserita dall'utente)
//- es. parola palindroma ingegni
    //- for per scorrere la sequenza di caratteri dal primo elemento
    //- for per scorrere la sequenza di caratteri dall'ultimo elemento
        //-confrontare se l'ultimo elemento è uguale al primo e così e aggiungere il carattere all'interno di una stringa vuota dichiarata all'inizio

// controllo se la parola inserita dall'utente è uguale alla stringa creata all'interno del secondo for

function isPalindromo(word){
    let newWordIsPalindroma = "";
    for (let i = 0; i < word.length; i++) {
        const elementFormZero = word[i];
        console.log("index i " + i);
        console.log("elementFormZero " + elementFormZero);
        for (let j = word.length-1; j > 0; j--){
            const elementFromLength = word[j];
            console.log("index j " + j);
            console.log("elementFromLength " + elementFromLength);
            if (elementFromLength === elementFormZero){
                newWordIsPalindroma += elementFromLength;
                console.log("newWordIsPalindroma " + newWordIsPalindroma);
                console.log("DA CAPO");
                
                break;
            }
        }  
    }
    if (word === newWordIsPalindroma){
        return true;
    } else {
        return false;
    }
}
//Chiedere all’utente di inserire una parola
const pal = isPalindromo(prompt("inserisci una parola per verificare se è palindroma"));
document.writeln(pal);





// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.





// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?