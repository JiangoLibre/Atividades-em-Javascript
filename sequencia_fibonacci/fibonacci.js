// Define o número a ser verificado
const numeroVerificado = 13;

// Define as variáveis para calcular a sequência
let primeiroNumero = 0;
let segundoNumero = 1;
let proximoNumero = 0;

// Loop para calcular a sequência até o próximo valor ser maior ou igual ao número informado
while (proximoNumero < numeroVerificado) {
  proximoNumero = primeiroNumero + segundoNumero;
  primeiroNumero = segundoNumero;
  segundoNumero = proximoNumero;
}

// Verifica se o número informado pertence à sequência
if (proximoNumero === numeroVerificado) {
  console.log(`${numeroVerificado} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numeroVerificado} não pertence à sequência de Fibonacci`);
}
