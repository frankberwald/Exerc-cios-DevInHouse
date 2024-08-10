document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  calcular.addEventListener('click', function(){
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

  function calcularPerimetro (base, altura){
    return 2 * (base + altura);
  };

  function calcularArea (base, altura) {
    return base * altura;
  };

  let perimetro = calcularPerimetro(base, altura);
  let area = calcularArea (base, altura);

  resultado1.textContent = `Perímetro do retângulo: ${perimetro}`;
  resultado2.textContent = `Área do do retângulo: ${area.toFixed(2)}`;

  });
});