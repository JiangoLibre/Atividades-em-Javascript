// Define o número a ser verificado
const num = 13;

// Define as variáveis para calcular a sequência
let prev = 0;
let curr = 1;
let next = 0;

// Loop para calcular a sequência até o próximo valor ser maior ou igual ao número informado
while (next < num) {
  next = prev + curr;
  prev = curr;
  curr = next;
}

// Verifica se o número informado pertence à sequência
if (next === num) {
  console.log(`${num} pertence à sequência de Fibonacci`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci`);
}