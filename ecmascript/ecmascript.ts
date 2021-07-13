/******************************** LET E CONST *********************************/
/* As variáveis declaradas com var são içadas (elevadas), ou seja, na execução,
 * elas são declaradas no topo do escopo no qual são declaradas, permitindo que
 * seja possível usá-las antes mesmo de terem um valor a elas atribuído. Isso
 * não acontece com as variáveis declaradas com o tipo let, gerando um erro
 * (para visualizar esse erro, altere a versão JS para a qual o TS será
 * convertido, já que let e const só foram introduzidos no ES6):
 * 
 * console.log(minhaVar)
 * let minhaVar = 0
 * 
 * Vale notar que "var" possui um escopo global no navegador e um escopo modular
 * no node (cada arquivo é um módulo). Porém, se for criada dentro de uma
 * função, só poderá ser acessada lá dentro. Já o "let" possui escopo limitado
 * à função ou ao bloco no qual foi declarado:
 * 
 * let estaFrio = true;
 * if (estaFrio) {
 *   let acao = "Colocar casaco!"
 *   console.log(acao)
 * }
 * console.log(acao) <-- Erro
 * 
 * As constantes são declaradas com "const", são imutáveis, e têm o escopo de
 * bloco e de função, como as variáveis "let":
 * 
 * const cpf: string = "123.456.789-00"
 * cpf = "outro valor" <-- Erro
 */