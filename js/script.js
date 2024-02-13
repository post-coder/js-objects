	
const palla = {
    // chiave: "valore",
    prezzo: 12,
    tipo: "pallina da golf",
    colore: "rosso",
    peso: "14kg",
}

palla.marca = "Supreme";

console.log(palla)



// cilo for che itera per ogni proprietà del nostro oggetto
// si chiama ciclo for-in

for (let chiave in palla) {

    console.log(chiave + ": " + palla[chiave]);

}

