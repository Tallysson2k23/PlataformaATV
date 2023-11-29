// Classe abstrata Veículo com método clone e represent
abstract class Veiculo implements Cloneable {
    protected String modelo;
    protected String marca;
    protected String cor;
    protected int numeroRodas;

    // Construtor padrão
    public Veiculo() {
    }

    // Construtor com parâmetros
    public Veiculo(String modelo, String marca, String cor, int numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    // Método clone abstrato
    public abstract Veiculo clone();

    // Método represent
    public String represent() {
        return "Veículo [modelo=" + modelo + ", marca=" + marca + ", cor=" + cor + ", numeroRodas=" + numeroRodas + "]";
    }
}

// Subclasse Carro que estende Veículo
class Carro extends Veiculo {
    private int numeroPortas;

    // Construtor com parâmetros adicionais
    public Carro(String modelo, String marca, String cor, int numeroRodas, int numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    // Implementação do método clone para Carro
    @Override
    public Carro clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    // Sobrescrita do método represent para Carro
    @Override
    public String represent() {
        return "Carro [modelo=" + modelo + ", marca=" + marca + ", cor=" + cor + ", numeroRodas=" + numeroRodas +
                ", numeroPortas=" + numeroPortas + "]";
    }
}

// Subclasse Moto que estende Veículo
class Moto extends Veiculo {
    private String tipo;

    // Construtor com parâmetros adicionais
    public Moto(String modelo, String marca, String cor, int numeroRodas, String tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    // Implementação do método clone para Moto
    @Override
    public Moto clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.tipo);
    }

    // Sobrescrita do método represent para Moto
    @Override
    public String represent() {
        return "Moto [modelo=" + modelo + ", marca=" + marca + ", cor=" + cor + ", numeroRodas=" + numeroRodas +
                ", tipo=" + tipo + "]";
    }
}

// Classe Aplicação
public class Aplicacao {
    public static void main(String[] args) {
        // Criação de um array com seis veículos com dois tipos de veículos diferentes
        Veiculo[] veiculos = new Veiculo[6];
        veiculos[0] = new Carro("Civic", "Honda", "Preto", 4, 4);
        veiculos[1] = new Moto("CBR", "Honda", "Vermelho", 2, "Esportiva");
        // Preenchimento do restante do array usando o método clone
        for (int i = 2; i < veiculos.length; i++) {
            veiculos[i] = veiculos[i % 2].clone();
        }

        // Chamada do método represent para cada elemento do array de clones
        for (Veiculo veiculo : veiculos) {
            System.out.println(veiculo.represent());
        }
    }
}
