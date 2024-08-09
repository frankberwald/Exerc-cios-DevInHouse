document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  calcular.addEventListener('click', function(){
    const lados = parseFloat(document.getElementById('lados').value);

    function calcularArea(lados){
      return lados ** 2;
    }

    function calcularPerimetro(lados){
      return lados * 4;
    }

    const area = calcularArea(lados);
    const perimetro = calcularPerimetro(lados);

    resultado1.textContent = `Área do quadrado: ${area.toFixed(2)}`
    resultado2.textContent = `Perímetro do quadrado: ${perimetro.toFixed(2)}`

  });
});

