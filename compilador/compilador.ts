/****************************** NO EMIT ON ERROR ******************************/

let canal: string = "Código Fonte TV"
let inscritos: number = 350000

/* A próxima atribuição gera um erro, e o arquivo JS não é gerado. Para mudar
 * esse comportamento, basta incluir a seguinte linha no arquivo de configuração
 * do TypeScript (tsconfig.json), localizado no diretório raíz do projeto:
 * "noEmitOnError": false
 * O erro continua sendo apresentado, porém o arquivo JS é gerado mesmo assim.
 * O CodeRunner não gera o arquivo, mesmo definindo a flag, é preciso usar outro
 * método apresentado no arquivo de instruções.
*/

canal = inscritos
console.log(canal)

/* A propriedade "target" no tsconfig, refere-se para qual versão do JavaScript
 * os arquivos TS serão convertidos. Não muda muita coisa mexer nessa
 * propriedade pois o TS consegue converter até para versões bem antigas e, além
 * disso, hoje praticamente todas as plataformas suportam as versões mais
 * recentes do JS. O que pode impactar de fato é o tamanho do arquivo gerado,
 * visto que as versões mais recentes do JS apresentam formas mais enxutas de
 * escrever o código.
*/