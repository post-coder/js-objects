/*
Ciao ragazzi,
Esercizio di oggi: Oggetti Studenti
nome repo: js-oggetti-studenti

Descrizione:
1. Creare un oggetto che descriva uno studente, 
con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in 
tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti 
(ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti 
e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, 
attraverso 3 prompt(), 
di aggiungere all’array creato in precedenza, 
un nuovo oggetto studente inserendo nell’ ordine:
 nome, cognome e età.
*/


const studente = {
    nome: "Mario",
    cognome: "Rossi",
    eta: "30"
}

for (let chiave in studente) {
    console.log(chiave + ": " + studente[chiave])
}

console.log("------------------")



const studenti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: "30"
    },
    {
        nome: "Luigi",
        cognome: "Bianchi",
        eta: "35"
    },
    {
        nome: "Flavia",
        cognome: "Fulvia",
        eta: "28"
    }
]



const newStudent = {};

// chiediamo il nuovo nome
const newName = prompt("Come si chiama il nuovo studente?");
newStudent.name = newName;

// chiediamo il cognome del nuovo studente
newStudent.cognome = prompt("Qual è il suo cognome?");

// età
newStudent.eta = Number(prompt("Quanti anni ha?"))

console.log(newStudent)


// lo inseriamo nell'array
studenti.push(newStudent)


// mostriamo tutti gli studenti

for(let i = 0; i < studenti.length; i++) {

    const actualStudent = studenti[i];

    for (let key in actualStudent) {
        // key in questo ciclo for-in prende di volta in volta
        // ad ogni iterazione il nome DELLA CHIAVE di ogni proprietà
        // per accedere al VALORE della proprietà dobbiamo usare 
        // la notazione con parentesi quadre oggetto[variabileDellaChiave]
        console.log(`${key}: ${actualStudent[key]}`)
    }

}