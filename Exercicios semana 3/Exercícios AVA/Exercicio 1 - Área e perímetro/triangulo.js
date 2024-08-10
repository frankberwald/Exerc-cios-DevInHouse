console.log("Cálculo de Área e perímetro de um triângulo");

function calcularArea (a, b, c){
  let s = (a +b +c) / 2;
  return Math.sqrt (s * (s -a) * (s - b) * (s - c));
};

function calcularPerimetro (a, b, c) {
  return a + b + c;
};

let lado1 = parseFLoat(prompt("Digite o comprimento do primeiro lado:"));
let lado2 = parseFLoat(prompt("Digite o comprimento do segundo lado:"));
let lado3 = parseFLoat(prompt("Digite o comprimento do terceiro lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
  let perimetro = calcularPerimetro(lado1, lado2, lado3);
  let area = calcularArea (lado1, lado2, lado3);

  console.log(`Perímetro do triângulo: ${perimetro}`)
  console.log(`Área do triângulo: ${area}`)
} else {
  console.log("Os valores declarados não formam um triângulo");
}