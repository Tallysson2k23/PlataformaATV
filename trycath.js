
const prompt = require("prompt-sync")();

const num1 = prompt("Digite o primeiro número: ");
const num2 = prompt("Digite o segundo número: ");

try {
  let resultado = num1 / num2;
  if (isNaN(resultado)) {
    throw new Error("Resultado não é um número válido!");
  }
  console.log("O resultado da divisão é: " + resultado);
} catch (error) {
  
  console.error("Ocorreu um erro: " + error.message);
} finally {
  console.log("Finalizando o processo.");
};