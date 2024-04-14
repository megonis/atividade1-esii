const prompt = require("prompt-sync")();
// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) { 
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
  if (v2 === 0) {
    return 'Erro: Não é possível dividir por zero!';
  }

  return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return Math.sqrt(v1);
}

// Função para calcular com base na opção selecionada
function calculate(option, value1, value2) {
  switch (option) {
    case 1:
      return sum(value1, value2);
    case 2:
      return sub(value1, value2);
    case 3:
      return div(value1, value2);
    case 4:
      return mult(value1, value2);
    case 5:
      return square(value1);
    default:
      return "Digite um valor válido"
  }
}

do {
  // Exibe as opções para o usuário
  console.log("Calculadora");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Divisão");
  console.log("4 - Multiplicação");
  console.log("5 - Raiz quadrada");
  console.log("0 - Sair");
  // Recebe a opção do usuário
  const option = Number(prompt("Escolha uma opção: "));

  // Verifica se a opção é válida
  if (isNaN(option) || option < 0 || option > 5) {
    console.log("Opção inválida");
    continue;
  }

  // Verifica se a opção é para a raiz quadrada
  if (option === 5) {
    const value = Number(prompt("Digite um número: "));
    console.log(`O resultado é: ${calculate(option, value)}`);
  } else if (option === 0) {
    break;
  } else {
    const value1 = Number(prompt("Digite o primeiro número: "));
    const value2 = Number(prompt("Digite o segundo número: "));
    console.log(`O resultado é: ${calculate(option, value1, value2)}`);
  }
} while (true);
