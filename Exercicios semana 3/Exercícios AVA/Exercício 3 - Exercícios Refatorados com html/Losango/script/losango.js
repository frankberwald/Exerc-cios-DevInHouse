document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  calcular.addEventListener('click', function(){
    const lados = parseFloat(document.getElementById('lados').value);
    const dmenor = parseFloat(document.getElementById('dmenor').value);
    const dmaior = parseFloat(document.getElementById('dmaior').value);


function calcularArea(lados){
  return lados * 4;
}

function calcularPerimetro(dmaior, dmenor){
  return (dmaior * dmenor) / 2;
}

const area = calcularArea(lados);
const perimetro = calcularPerimetro (dmaior, dmenor);

resultado1.textContent = `Área do losango: ${area.toFixed(2)}`;
resultado2.textContent = `Perímetro do losango: ${perimetro.toFixed(2)}`;
  });
});