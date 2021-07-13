"use strict";
let nome = "Helton";
console.log(nome);
let idade = 27;
idade = 27.5;
let umaFlag = true;
let id;
id = 123;
id = "Meu Id é 123";
let hobbies = ["Cozinhar", "Praticar Esportes", true];
hobbies = [100];
let endereco = ["Av. Principal", 123];
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 100] = "azul";
    Cor[Cor["laranja"] = 101] = "laranja";
    Cor[Cor["amarelo"] = 0] = "amarelo";
    Cor[Cor["vermelho"] = 1] = "vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.vermelho;
let carro = "BMW";
carro = { marca: "BMW", cor: "branca" };
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 10));
let calculo;
calculo = multiplicar;
console.log(calculo(2, 3));
let usuario = {
    senha: "123456",
    nome: "Ricardo",
};
let funcionario = {
    supervisores: ["Valdir", "Carlos", "Felipe"],
    baterPonto(hora) {
        return hora <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
let funcionario1 = {
    supervisores: ["Valdir", "Carlos", "Felipe"],
    baterPonto(hora) {
        return hora <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
let nota;
nota = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
produto.validarProduto();
let altura;
altura = 13;
altura = null;
const contato1 = {
    nome: "Fulano",
    tel1: "987654321",
    tel2: null,
};
let podeSerNulo = null;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
