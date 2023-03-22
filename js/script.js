// costanti
const name = document.getElementById('name');
const kmDaPercorrere = document.getElementById('kmDaPercorrere');
const etaPasseggero = document.getElementById('etaPasseggero');
const costoChilometro = 0.21;
const carrozza = Math.ceil(Math.random()*12);
const codiceCp = Math.floor(Math.random() * (99000 - 10000 +1) + 10000);

outputcarrozza = document.getElementById('outputcarrozza');
outputcodicecp = document.getElementById('outputcodicecp');

// valori che potrebbero cambiare => t1

document.querySelector('#genera').addEventListener('click', function() {

  let PrezzoBiglietto = kmDaPercorrere.value * costoChilometro;

  if (etaPasseggero.value === 'minorenne') {
    PrezzoBiglietto = PrezzoBiglietto * 0.8;
  } else if (etaPasseggero.value === 'over') {
    PrezzoBiglietto = PrezzoBiglietto * 0.6;
  }

  document.getElementById('output').innerHTML = ` 
  ${PrezzoBiglietto.toFixed(2)} €`;

  document.querySelector('.ticket').classList.remove('hide');
});

document.querySelector('#reset').addEventListener('click', function(){
  name.value = "";
  kmDaPercorrere.value = "";
  document.querySelectorAll('input').reset();
});




// t0 => quando si carica la pagina

// t1 => quando clicchiamo sul pulsante