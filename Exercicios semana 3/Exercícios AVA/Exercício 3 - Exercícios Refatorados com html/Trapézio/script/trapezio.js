document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  
  function calcularArea(baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2;
  }
  function calcularPerimetro(baseMaior, baseMenor, lado1, lado2){
    return baseMaior + baseMenor + lado1 + lado2;
  }
  
  calcular.addEventListener('click', function(){

  const baseMaior = parseFloat(document.getElementById('baseMaior').value)
  const baseMenor = parseFloat(document.getElementById('baseMenor').value)
  const lado1 = parseFloat(document.getElementById('lado1').value)
  const lado2 = parseFloat(document.getElementById('lado2').value)
  const altura = parseFloat(document.getElementById('altura').value)

  const area = calcularArea(baseMaior, baseMenor, altura);
  const perimetro = calcularPerimetro(baseMaior, baseMenor, lado1, lado2);

  resultado1.textContent = `Área do trapézio: ${area.toFixed(2)}`;
  resultado2.textContent = `Perímetro do trapézio: ${perimetro.toFixed(2)}`;
  });
});