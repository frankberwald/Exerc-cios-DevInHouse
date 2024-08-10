console.log("Cálculo de Área e Perímetro de um losango");

let ladosLosango = parseFloat(prompt("Digite o comprimento dos lados"));
let diagonalMaior = parseFloat(prompt("Digite o comprimento da diagonal maior"));
let diagonalMenor = parseFloat(prompt("Digite o comprimento da diagonal menor"));

function calcularArea(ladosLosango){
  return ladosLosango * 4;
}

function calcularPerimetro(diagonalMaior, diagonalMenor){
  return (diagonalMaior * diagonalMenor) / 2;
}

let area = calcularArea(ladosLosango);
let perimetro = calcularPerimetro (diagonalMaior, diagonalMenor);

console.log(`Perímetro do losango: ${perimetro}`);
console.log(`Área do losango: ${area}`);