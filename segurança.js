class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSecreta123";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta!");
        } else {
            console.log("Acesso negado! Senha incorreta.");
        }
    }
}

// Programa principal
const agente007 = SistemaSeguranca.getInstance();
const agente008 = SistemaSeguranca.getInstance();

// Ambas as instâncias apontam para o mesmo objeto Singleton
console.log(agente007 === agente008); // true

// Agente 007 tenta acessar a Base Secreta
agente007.acessarBaseSecreta("senhaIncorreta"); // Acesso negado! Senha incorreta.

// Agente 008 tenta acessar a Base Secreta com a senha correta
agente008.acessarBaseSecreta("senhaSecreta123"); // Acesso concedido à Base Secreta!
