const prompt = require('prompt-sync')();
// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

// * Calculadora
console.log('Calculadora');
console.log('1 - Soma');
console.log('2 - Subtração');
console.log('3 - Divisão');
console.log('4 - Multiplicação');
console.log('5 - Raiz quadrada');
const option = prompt('Escolha uma opção: ');
// * Executa a opção escolhida pelo usuário
if (option === '5') {
  const value = Number(prompt('Digite um número: '));
  console.log(`O resultado é: ${square(value)}`);
} else {
  const value1 = Number(prompt('Digite o primeiro número: '));
  const value2 = Number(prompt('Digite o segundo número: '));
  if (option === '1') {
    console.log(`O resultado é: ${sum(value1, value2)}`);
  } else if (option === '2') {
    console.log(`O resultado é: ${sub(value1, value2)}`);
  } else if (option === '3') {
    console.log(`O resultado é: ${div(value1, value2)}`);
  } else if (option === '4') {
    console.log(`O resultado é: ${mult(value1, value2)}`);
  } else {
    console.log('Opção inválida');
  }
}
