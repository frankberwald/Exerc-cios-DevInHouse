console.log("Cálculo de juros sob um empréstimo")

let capital = parseFloat(prompt("Digite o valor do capital a ser calculado os juros"));
let taxa = parseFloat(prompt("Digite o percentual da taxa"));
let tempo = parseFloat(prompt("Digite o tempo para pagar o empréstimo(Minimo 12 meses)"));

function calcularTaxa(taxa){
  let taxaFinal = taxa / 100;
  return taxaFinal;

}

function calcularJuros (capital, taxaFinal, tempo){

  let juros = capital * taxaFinal * tempo;

  return juros;
}

function montanteJuros(capital, juros){
  let montante = capital + juros;
  return montante;
}

let taxaFinal = calcularTaxa(taxa)
let juros = calcularJuros(capital, taxaFinal, tempo);
let montante = montanteJuros (capital, juros);

console.log(`Capital: R$ ${capital.toFixed(2)}`)
console.log(`Taxa: ${taxa.toFixed(2)}%`)
console.log(`Tempo: ${tempo} meses`)
console.log(`Juros: R$ ${juros.toFixed(2)}`);
console.log(`Montante Final: R$ ${montante.toFixed(2)}`);