alert("Cálculo de Área e Perímetro de um círculo.");

let diametro = parseFloat(prompt("Digite o diâmetro do círculo"));
let raio = diametro / 2;

function calcularPerimetro(raio){
  return (2 * 3.14) * raio;
};

function calcularArea(raio){
  return 3.14 * (raio ** 2);
};

let perimetro = calcularPerimetro(raio);
let area = calcularArea (raio);

console.log(`Perímetro do círculo: ${perimetro}`);
console.log(`Área do círculo: ${area}`);