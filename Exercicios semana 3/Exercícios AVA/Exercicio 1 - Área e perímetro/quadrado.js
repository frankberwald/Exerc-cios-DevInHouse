console.log("Cálculo de Área e perímetro de um quadrado");

let lados = parseFloat(prompt("Digite o valor dos lados"));

  function calcularArea(lados){
    return lados ** 2;
  };

  function calcularPerimetro(lados){
    return lados * 4;
  };
  let perimetro = calcularPerimetro(lados);
  let area = calcularArea (lados);

  console.log(`Perímetro do quadrado: ${perimetro}`)
  console.log(`Área do do quadrado: ${area}`)

