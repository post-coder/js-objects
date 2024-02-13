
// array di oggetti
const studenti = [
    {
        nome: "Gabriel",
        cognome: "Spanu",
        eta: 28
    },
    {
        nome: "Spongebob",
        cognome: "Squarepants",
        eta: 28
    },
    {
        nome: "Patrick",
        cognome: "Stella",
        eta: 28
    }
]


// stampo il nome dello studente con indice 2 (terzo)
console.log(studenti[2].nome)

console.log("------------------")


// stampo tutte le proprietà di ogni studente
for (let i = 0; i < studenti.length; i++) {

    const oggettoAttuale = studenti[i];

    for (let key in oggettoAttuale) {

        console.log(key + ": " + oggettoAttuale[key])
        
    }

    console.log("------------------")

}