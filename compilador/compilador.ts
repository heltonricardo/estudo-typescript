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