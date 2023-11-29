// Interface que define o contrato para os sanduíches
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
}

// Implementação concreta do sanduíche de frango assado
class FrangoAssado implements Sanduiche {
    getDescricao(): string {
        return "Sanduíche de Frango Assado";
    }

    getCusto(): number {
        return 4.50;
    }
}

// Decorator abstrato que serve como base para os ingredientes adicionais
abstract class Decorator implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    abstract getDescricao(): string;

    getCusto(): number {
        return this.sanduiche.getCusto();
    }
}

// Ingredientes adicionais (decorators concretos)
class Pepperoni extends Decorator {
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 0.99;
    }
}

class QueijoMussarelaRalado extends Decorator {
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Exemplo de uso
const sanduicheBase: Sanduiche = new FrangoAssado();
const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(sanduicheBase));

console.log(`${sanduicheDecorado.getDescricao()} custa $${sanduicheDecorado.getCusto().toFixed(2)}`);
