
const nomi = ["Gabriel", "Giordano", "Ilaria"];


// nuovo oggetto di tipo "persona"

// persona -> "oggetto"
// nome: "Gabriel", -> proprietà (coppia)
    // nome -> chiave
    // "Gabriel" -> valore
const persona = {
    nome: "Gabriel",
    cognome: "Spanu",
    eta: 27,
};

// aggiungiamo una proprietà al nostro oggetto
// se la chiave indicata è di una proprietà già presente verrà sovrascritta
// altrimenti verrà aggiunta
persona['citta'] = "Usini";



// chiedo all'utente quale valore vuole leggere
const sceltaUtente = prompt("Quale proprietà vuoi?");

// stampo la proprietà scelta?
console.log( persona[ sceltaUtente ]);


