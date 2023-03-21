// costanti
const name = document.getElementById('name').value;
const kmDaPercorrere = document.getElementById('kmDaPercorrere').value;
const etaPasseggero = document.getElementById('etaPasseggero').value;
const costoChilometro = 0.21;

// valori che potrebbero cambiare
let PrezzoBiglietto = kmDaPercorrere * costoChilometro;

console.log(kmDaPercorrere, etaPasseggero);
console.warn(PrezzoBiglietto);

if (etaPasseggero <= 18) {
  PrezzoBiglietto = PrezzoBiglietto * 0.8;
} else if (etaPasseggero >= 65) {
  PrezzoBiglietto = PrezzoBiglietto * 0.6;
}

document.querySelector('button').addEventListener('click', function(){
  document.getElementById('Input').reset();
})

document.getElementById('output').innerHTML = `Il costo del biglietto è ${PrezzoBiglietto.toFixed(2)} €`;

