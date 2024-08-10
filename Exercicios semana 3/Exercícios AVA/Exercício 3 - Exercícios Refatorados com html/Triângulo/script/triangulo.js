document.addEventListener('DOMContentLoaded',function(){
  const calcular = document.getElementById('calcular');
  const resultado1 = document.getElementById('resultado1');
  const resultado2 = document.getElementById('resultado2');

  calcular.addEventListener('click', function(event){
    event.preventDefault()

    const lado1 = parseFloat(document.getElementById('lado1').value)
    const lado2 = parseFloat(document.getElementById('lado2').value)
    const lado3 = parseFloat(document.getElementById('lado3').value)

function calcularArea (a, b, c){
  let s = (a +b +c) / 2;
  return Math.sqrt (s * (s -a) * (s - b) * (s - c));
};

function calcularPerimetro (a, b, c) {
  return a + b + c;
};

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
   perimetro = calcularPerimetro(lado1, lado2, lado3);
   area = calcularArea (lado1, lado2, lado3);
  
  console.log(`Perímetro do triângulo: ${perimetro}`)
  console.log(`Área do triângulo: ${area}`)

  resultado1.textContent =`Área do triângulo ${area.toFixed(2)}`;
  resultado2.textContent =`Perímetro do triângulo ${perimetro.toFixed(2)}`;
} else {
  console.log("Os valores declarados não formam um triângulo");
    }
  });
});