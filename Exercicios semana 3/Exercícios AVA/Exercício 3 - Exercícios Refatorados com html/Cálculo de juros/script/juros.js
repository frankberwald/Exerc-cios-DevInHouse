document.addEventListener('DOMContentLoaded',function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');
  const resultado3 = document.getElementById('resultado3');
  const resultado4 = document.getElementById('resultado4');
  const resultado5 = document.getElementById('resultado5');

  calcular.addEventListener('click', function(){
    event.preventDefault()
    const capital = parseFloat(document.getElementById('capital').value)
    const taxa = parseFloat(document.getElementById('taxa').value)
    const tempo = parseFloat(document.getElementById('tempo').value)



function calcularTaxa(taxa){
  return taxa / 100;
}
function calcularJuros (capital, taxaFinal, tempo){
  return capital * taxaFinal * tempo;
}
function montanteJuros(capital, juros){
  return  capital + juros;
}
const taxaFinal = calcularTaxa(taxa)
const juros = calcularJuros(capital, taxaFinal, tempo);
const montante = montanteJuros (capital, juros);

resultado1.textContent = `Capital: R$ ${capital.toFixed(2)}`;
resultado2.textContent = `Taxa: ${taxa.toFixed(2)}%`;
resultado3.textContent = `Tempo: ${tempo} meses`;
resultado4.textContent = `Juros: R$ ${juros.toFixed(2)}`;
resultado5.textContent = `Montante Final: R$ ${montante.toFixed(2)}`;
  });
});