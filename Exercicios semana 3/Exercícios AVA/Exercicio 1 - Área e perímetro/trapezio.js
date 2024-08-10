console.log("Cálculo de Área e Perímetro de um Trapézio");

let baseMaior = parseFloat(prompt("Digite o comprimento da base maior"));
let baseMenor = parseFloat(prompt("Digite o comprimento da base menor"));
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado"));
let altura = parseFloat(prompt("Digite a altura"));

function calcularArea(baseMaior, baseMenor, altura){
  return (baseMaior + baseMenor) * altura / 2;
};
function calcularPerimetro(baseMaior, baseMenor, lado1, lado2){
  return baseMaior + baseMenor + lado1 + lado2;
};

let area = calcularArea(baseMaior, baseMenor, altura);
let perimetro = calcularPerimetro(baseMaior, baseMenor, lado1, lado2);

  console.log(`Perímetro do trapézio: ${perimetro}`);
  console.log(`Área do trapézio: ${area}`);