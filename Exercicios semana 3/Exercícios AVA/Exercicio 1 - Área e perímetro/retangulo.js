console.log("Cálculo de Área e perímetro de um retângulo");

  let base = parseFloat(prompt("Digite o comprimento da base:"));
  let altura = parseFloat(prompt("Digite a altura:"));

  function calcularPerimetro (base, altura){
    return 2 * (base + altura);
  };

  function calcularArea (base, altura) {
    return base * altura;
  };

  let perimetro = calcularPerimetro(base, altura);
  let area = calcularArea (base, altura);

  console.log(`Perímetro do retângulo: ${perimetro}`)
  console.log(`Área do do retângulo: ${area}`)
