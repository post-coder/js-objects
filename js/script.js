
const classe = {
    nome: "Classe 118",
    partenza: "29 Nov 2023",
    alunni: ["Giorgio", "Luca", "Miriam", "Marco"],
    professori: ['Elisabetta', 'Gabriel', 'Daniele', 'Davide'],
}

// primo alunno della classe
console.log(classe.alunni[0])


console.log("------------------")

// stampiamo il quarto professore inserito nella lista
console.log(classe.professori[3])

console.log("------------------")

// stampiamo tutti i professori del mio oggetto
for (let i = 0; i < classe.professori.length; i++) {

    console.log(classe.professori[i])

}