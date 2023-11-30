// Interface Galinha
interface Galinha {
    cacarejar(): void;
    voar(): void;
}

// Implementação concreta de Galinha
class GalinhaComum implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voar(): void {
        console.log("Galinhas não voam muito alto.");
    }
}

// Interface Pato
interface Pato {
    grasnar(): void;
    voar(): void;
}

// Implementação concreta de Pato
class PatoSelvagem implements Pato {
    grasnar(): void {
        console.log("Quack!");
    }

    voar(): void {
        console.log("Voando alto!");
    }
}

// Adaptador de Pato para Galinha
class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    voar(): void {
        this.pato.voar();
    }
}

// Demo para demonstrar o uso do AdaptadorPato
class AdaptadorPatoDemo {
    static main(): void {
        const patoSelvagem: Pato = new PatoSelvagem();
        const adaptador: Galinha = new AdaptadorPato(patoSelvagem);

        console.log("Pato Selvagem:");
        patoSelvagem.grasnar();
        patoSelvagem.voar();

        console.log("\nAdaptador de Pato para Galinha:");
        adaptador.cacarejar();
        adaptador.voar();
    }
}

// Executa a demo
AdaptadorPatoDemo.main();
