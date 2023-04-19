const fs = require('fs');

// Lê o arquivo JSON
const jsonString = fs.readFileSync('faturamento.json', 'utf-8');
const json = JSON.parse(jsonString);

const faturamentoDiario = json.faturamento_diario;

let menorValor = faturamentoDiario[0].valor;
let maiorValor = faturamentoDiario[0].valor;
let totalFaturamento = 0;
let diasComFaturamentoMaiorQueMedia = 0;

// Itera sobre o array para obter o menor e o maior valor de faturamento e calcular a média mensal
for (let i = 0; i < faturamentoDiario.length; i++) {
  const valor = faturamentoDiario[i].valor;
  if (valor < menorValor) {
    menorValor = valor;
  }
  if (valor > maiorValor) {
    maiorValor = valor;
  }
  if (valor > 0) {
    totalFaturamento += valor;
  }
}

const mediaMensal = totalFaturamento / faturamentoDiario.length;

// Itera sobre o array novamente para encontrar o número de dias em que o valor de faturamento diário foi superior à média
for (let i = 0; i < faturamentoDiario.length; i++) {
  const valor = faturamentoDiario[i].valor;
  if (valor > mediaMensal) {
    diasComFaturamentoMaiorQueMedia++;
  }
}

console.log(`Menor valor de faturamento diário: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${diasComFaturamentoMaiorQueMedia}`);
