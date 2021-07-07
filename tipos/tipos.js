"use strict";
var nome = "Helton";
console.log(nome);
var idade = 27;
idade = 27.5;
var umaFlag = true;
var id;
id = 123;
id = "Meu Id é 123";
var hobbies = ["Cozinhar", "Praticar Esportes", true];
hobbies = [100];
var endereco = ["Av. Principal", 123];
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 100] = "azul";
    Cor[Cor["laranja"] = 101] = "laranja";
    Cor[Cor["amarelo"] = 0] = "amarelo";
    Cor[Cor["vermelho"] = 1] = "vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.vermelho;
var carro = "BMW";
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
var calculo;
calculo = multiplicar;
console.log(calculo(2, 3));
var usuario = {
    senha: "123456",
    nome: "Ricardo",
};
var funcionario = {
    supervisores: ["Valdir", "Carlos", "Felipe"],
    baterPonto: function (hora) {
        return hora <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
var funcionario1 = {
    supervisores: ["Valdir", "Carlos", "Felipe"],
    baterPonto: function (hora) {
        return hora <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
var nota;
nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = "10";
console.log("Minha nota \u00E9 " + nota);
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: "Sabão",
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
produto.validarProduto();
var altura;
altura = 13;
altura = null;
var contato1 = {
    nome: "Fulano",
    tel1: "987654321",
    tel2: null,
};
var podeSerNulo = null;
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
var correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
