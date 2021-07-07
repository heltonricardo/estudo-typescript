/****************************** NO EMIT ON ERROR ******************************/
/* A próxima atribuição gera um erro, e o arquivo JS não é gerado. Para mudar
 * esse comportamento, basta incluir a seguinte linha no arquivo de configuração
 * do TypeScript (tsconfig.json), localizado no diretório raíz do projeto:
 * "noEmitOnError": false
 * O erro continua sendo apresentado, porém o arquivo JS é gerado mesmo assim.
 * O CodeRunner não gera o arquivo, mesmo definindo a flag, é preciso usar outro
 * método apresentado no arquivo de instruções.
 */

let canal: string = "Código Fonte TV"
let inscritos: number = 350000

// canal = inscritos <- Erro
console.log(canal)

/*********************************** TARGET ***********************************/
/* A propriedade "target" no tsconfig, refere-se para qual versão do JavaScript
 * os arquivos TS serão convertidos. Não muda muita coisa mexer nessa
 * propriedade pois o TS consegue converter até para versões bem antigas e, além
 * disso, hoje praticamente todas as plataformas suportam as versões mais
 * recentes do JS. O que pode impactar de fato é o tamanho do arquivo gerado,
 * visto que as versões mais recentes do JS apresentam formas mais enxutas de
 * escrever o código.
 */

/********************************* SOURCEMAP **********************************/
/* Essa propriedade habilita a geração do arquivo sourcemap (.map). Esse
 * arquivo permite que tenhamos acesso ao código original que deu acesso ao JS
 * que está executando em uma página. Para isso, utilize o DevTools (F12) no
 * browser > Source. Nas pasta terá, além do JS, o arquivo TS.
 */

/******************************* NOIMPLICITANY ********************************/
/* Liga ou desliga o erro sobre quando uma variável recebe implicitamente o tipo
 * any. O valor por padrão é true. Descomentando a propriedade, a definimos com
 * o valor false para que o código abaixo não apresente erros:
 */

function soma(a, b) {
  return a + b;
}