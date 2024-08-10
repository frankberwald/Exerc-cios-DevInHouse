document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  calcular.addEventListener('click', function(){
  const diametro = parseFloat(document.getElementById('diametro').value);

  function calcularRaio(diametro){
    return diametro / 2;
  }

  function calcularPerimetro(raio){
    return (2 * Math.PI) * raio;
  }

  function calcularArea(raio){
    return Math.PI * (raio ** 2);
  }
    const raio = calcularRaio(diametro)
    const area = calcularArea(raio)
    const perimetro = calcularPerimetro(raio)

    resultado1.textContent = `Área: ${area.toFixed(2)}`;
    resultado2.textContent = `Perímetro: ${perimetro.toFixed(2)}`;
  });
});


