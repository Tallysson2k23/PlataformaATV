// Implementação do padrão Observer

// Interface Observer
interface Observer {
    update(): void;
}

// Interface Subject
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Classe abstrata SubjectBase
abstract class SubjectBase implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}

// Classe abstrata Editor que estende SubjectBase
abstract class Editor extends SubjectBase {
    abstract open(): void;
    abstract save(): void;
}

// Implementação do Editor de Texto

// Subclasse TextEditor que estende Editor
class TextEditor extends Editor {
    private lines: string[] = [];

    open(): void {
        console.log("Editor de Texto Aberto");
    }

    insertLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber - 1, 0, text);
        this.notifyObservers();
    }

    removeLine(lineNumber: number): void {
        if (lineNumber >= 1 && lineNumber <= this.lines.length) {
            this.lines.splice(lineNumber - 1, 1);
            this.notifyObservers();
        }
    }

    save(): void {
        console.log("Conteúdo Salvo:");
        for (const line of this.lines) {
            console.log(line);
        }
    }

    getLines(): string[] {
        return [...this.lines];
    }
}

// Implementação de um Observador para imprimir o conteúdo

// Classe ConcreteObserver que implementa Observer
class ContentPrinterObserver implements Observer {
    private textEditor: TextEditor;

    constructor(textEditor: TextEditor) {
        this.textEditor = textEditor;
        this.textEditor.addObserver(this);
    }

    update(): void {
        this.printContent();
    }

    private printContent(): void {
        console.log("Conteúdo Atualizado:");
        const lines = this.textEditor.getLines();
        for (const line of lines) {
            console.log(line);
        }
    }
}

// Uso do Editor de Texto e Observador

const textEditor = new TextEditor();
const contentPrinter = new ContentPrinterObserver(textEditor);

textEditor.open();

// Receber linhas de texto do usuário até que "EOF" seja inserido
let lineNumber = 1;
let userInput = "";

while (userInput !== "EOF") {
    userInput = prompt(`Digite o texto da linha ${lineNumber} (ou "EOF" para encerrar):`);
    if (userInput !== "EOF") {
        textEditor.insertLine(lineNumber, userInput);
        lineNumber++;
    }
}

textEditor.save();
