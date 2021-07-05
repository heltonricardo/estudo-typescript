// string
let nome = "Helton";
console.log(nome);
// nome = 21 -> erro pois a variável já foi inferida como string

// number
let idade = 27;
idade = 27.5;
// não é um erro pois ambos os valores são numbers

// boolean
let umaFlag = true;
// umaFlag = 1; -> erro pois valores para boolean só podem ser true ou false

// tipo explícito
let id; // ou let id: any
id = 123;
id = "Meu Id é 123";
// quando uma variável é declarada sem atribuição, ela ficará com o tipo "any"

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes", true];
hobbies = [100];

// tuplas
let endereco: [string, number] = ["Av. Principal", 123];

// enums
enum Cor {
  cinza, // 0
  verde, // 1
  azul = 100,
  laranja, // 101
  amarelo = 0,
  vermelho, // 1
}
let minhaCor = Cor.vermelho;

// any
let carro: any = "BMW";
carro = { marca: "BMW", cor: "branca" };

// funções
function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(2, 10));

// definindo um tipo função
let calculo: (a: number, b: number) => number;
// definimos que a variável calculo pode receber funções apenas com esse tipo
// calculo = digaOi -> erro
calculo = multiplicar;
console.log(calculo(2, 3));

// objetos
let usuario: {nome: string, senha: string} = {
  senha: "123456",
  nome: "Ricardo",
};

// usuario = {}
// usuario = { name: "Ricardo", pass: "123456"}
// Depois de criado, um objeto deve sempre respeitar os nomes e tipos de
// proriedades que foram definidas em sua declaração
