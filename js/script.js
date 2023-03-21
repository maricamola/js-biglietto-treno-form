// costanti
const name = document.getElementById('name');
const kmDaPercorrere = document.getElementById('kmDaPercorrere');
const etaPasseggero = document.getElementById('etaPasseggero');
const costoChilometro = 0.21;

// valori che potrebbero cambiare => t1

document.querySelector('#genera').addEventListener('click', function() {

  let PrezzoBiglietto = kmDaPercorrere.value * costoChilometro;

  if (etaPasseggero.value === 'minorenne') {
    PrezzoBiglietto = PrezzoBiglietto * 0.8;
  } else if (etaPasseggero.value === 'over') {
    PrezzoBiglietto = PrezzoBiglietto * 0.6;
  }

  document.getElementById('output').innerHTML = `Il costo del biglietto è ${PrezzoBiglietto.toFixed(2)} €`;
});


document.querySelector('#reset').addEventListener('click', function(){
  name.value = "";
  kmDaPercorrere.value = "";
  document.querySelectorAll('input').reset();
});





// t0 => quando si carica la pagina

// t1 => quando clicchiamo sul pulsante