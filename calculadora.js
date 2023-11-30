// Interface Strategy
interface OperationStrategy {
    execute(num1: number, num2: number): number;
}

// Classes concretas que implementam a Strategy para Soma, Subtração e Multiplicação
class AddOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class SubtractOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class MultiplyOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
}

// Contexto que utiliza a Strategy
class Calculator {
    private strategy: OperationStrategy;

    setStrategy(strategy: OperationStrategy): void {
        this.strategy = strategy;
    }

    executeOperation(num1: number, num2: number): number {
        if (!this.strategy) {
            throw new Error("Strategy not set");
        }

        return this.strategy.execute(num1, num2);
    }
}

// Exemplo de uso
const calculator = new Calculator();

// Input do usuário: primeiro valor, segundo valor e operação
const num1 = parseInt(prompt("Digite o primeiro valor:"));
const num2 = parseInt(prompt("Digite o segundo valor:"));
const operation = prompt("Digite a operação (add, subtract, multiply):");

let strategy: OperationStrategy;

// Definir a Strategy com base na operação informada
switch (operation.toLowerCase()) {
    case "add":
        strategy = new AddOperation();
        break;
    case "subtract":
        strategy = new SubtractOperation();
        break;
    case "multiply":
        strategy = new MultiplyOperation();
        break;
    default:
        throw new Error("Operação inválida");
}

calculator.setStrategy(strategy);

// Executar a operação e imprimir o resultado
const result = calculator.executeOperation(num1, num2);
console.log(`Resultado da operação: ${result}`);
