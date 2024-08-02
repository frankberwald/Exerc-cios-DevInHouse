document.addEventListener('DOMContentLoaded', function(){
  const calcular = document.getElementById('calcular');
  const resultado = document.getElementById('result');

  calcular.addEventListener('click', function(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const soma = numero1 + numero2;

    resultado.textContent = `Resultado: ${soma}`;
  });
});