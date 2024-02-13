
const classi = [
    ["Gian Marco", "Roberto", "Alan", "Francesco"],
    ["Luca", "Ignazio", "Esmeraldo"],
    ["Igor", "Emanuele", "Tottore"]
];

// per stampare il primo elemento della seconda riga:
console.log(classi[1][0]);



console.log("------------");

// per stampare tutti gli elementi:
for(let i = 0; i < classi.length; i++) {


    const arrayAttuale = classi[i]; // array

    for(let j = 0; j < arrayAttuale.length; j++) {
        console.log( arrayAttuale[j] )
    }

}
