# Declarações de Prova

### Desenvolvimento Web 2 - Prof. Eduardo P de Sousa

## Descrição

Este aplicativo será desenvolvido durante a disciplina DW2 para exemplificar o processo de desenvolvimento de uma aplicação Web na linguagem JavaScript/Node.js.

Cada commit neste repositório exemplificará uma tarefa do desenvolvimento do aplicativo, desde a configuração inicial do ambiente. As diversas etapas serão descritas neste readme com os links para a documentação e guias relacionados.

## Passos

#### Arquivo .gitignore

Commit: [58129a8e9a1750b16eedc46a47619b44408eabf2](https://github.com/edupsousa/dw2-declaracoes-prova/tree/58129a8e9a1750b16eedc46a47619b44408eabf2)

O arquivo .gitignore especifíca os arquivos e diretórios que não devem ser adicionados ao repositório git. Uma boa prática é utilizar um dos modelos fornecidos pelo próprio github que podem ser encontrados [aqui](https://github.com/github/gitignore).

Um erro comum é adicionar os arquivos por engano antes da criação do arquivo .gitignore, nesse caso você pode fazer como descrito [aqui](http://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/).

A documentação oficial você encontra [aqui](https://git-scm.com/docs/gitignore).

#### npm init - criar arquivo package.json

Commit: [aeb92266b7927acd1f05b4ee9ae7226a2d4189cf](https://github.com/edupsousa/dw2-declaracoes-prova/tree/aeb92266b7927acd1f05b4ee9ae7226a2d4189cf)

O arquivo package.json contém as configurações do projeto para uso com a ferramenta `npm`, neste arquivo serão registradas as dependências do projeto, comandos para execução e testes do projetos, etc. Para maiores informações sobre o arquivo `package.json` clique [aqui](https://docs.npmjs.com/files/package.json).

Para criar esse arquivo de forma automatizada basta executar o comando `npm init`. Para maiores informações sobre o comando clique [aqui](https://docs.npmjs.com/cli/init).

#### Primeiro servidor Web com Node.js

Commit: [0b4ab52eefb269c59a06e51421adb6b9ed1e06bd](https://github.com/edupsousa/dw2-declaracoes-prova/tree/0b4ab52eefb269c59a06e51421adb6b9ed1e06bd)

Neste commit nós criamos o nosso primeiro servidor Web com Node.js. Para quem está acostumado com outras linguagens voltadas ao desenvolvimento Web, como PHP, uma das maiores diferenças é que com o Node.js é sua responsabilidade criar e iniciar o servidor Web, isso é feito por meio da biblioteca http do Node.js que nós importamos com a linha:

```js
const http = require('http');
```

Você pode conhecer as bibliotecas integradas ao Node.js na sua [documentação](https://nodejs.org/dist/latest-v12.x/docs/api/). Para mais informações sobre importação e exportação de módulos do Node.js e módulos externos você pode dar uma olhada nesse guia [aqui](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/).

Para executar o servidor basta digitar no console `node index.js`, para encerrar pressione `Ctrl+C`. Quando o servidor estiver em execução você pode acessá-lo pelo navegador no endereço http://localhost:3000. A porta 3000 do endereço foi definida na chamada para a função `listen`, verifique a documentação dessa função [aqui](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_server_listen).

```js
server.listen(3000, () => {
  console.log(...);
});
```

Quando você acessar o servidor uma mensagem deverá ser mostrada no console e outra no navegador, essas mensagens foram definidas no callback passado para a função `http.createServer`.

```js
const server = http.createServer((req, res) => {
  console.log(...);
  res.end(...);
});
```

Esse callback é chamado de `requestListener`, a cada nova requisição do navegador essa função é executada para gerar uma nova resposta para o navegador, mais informações sobre o assunto [aqui](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_createserver_options_requestlistener). Além disso vale a pena dar uma olhada nesse tutorial em português sobre o assunto no [blog da Caelum](https://blog.caelum.com.br/como-criar-um-servidor-http-com-nodejs/).

#### Instalando dependências

Commit: [cfb316358827f12d18715a616cffef50f7d71188](https://github.com/edupsousa/dw2-declaracoes-prova/tree/cfb316358827f12d18715a616cffef50f7d71188)

O Node.js é uma ferramenta muito popular, isso pode ser visto pela número de bibliotecas e ferramentas criadas pela comunidade para facilitar o desenvolvimento com ele. Para pesquisar por ferramentas e bibliotecas acesse o site do NPM https://www.npmjs.com/.

Neste commit nós instalaremos duas ferramentas que irão auxiliar no processo de desenvolvimento, a primeira delas é o [nodemon](https://www.npmjs.com/package/nodemon) e a outra é a biblioteca [debug](https://www.npmjs.com/package/debug).

Ambas as ferramentas irão auxiliar no processo de desenvolvimento, o `nodemon` será utilizado para monitorar as alterações no código e reiniciar o Node.js sempre que alguma alteração for detectada, evitando que precisemos fazer isso manualmente. Já a biblioteca `debug` será utilizada para gerar mensagens no console que auxiliam na detecção de erros.

Essas duas ferramentas são instaladas de forma ligeiramente diferente, o `nodemon` com o comando `npm install -D nodemon` e a `debug` com o comando `npm install -P debug`. Perceba a diferença das flags `-P` e `-D`, essas flags determinam em quais ambientes as bibliotecas devem ser instaladas. No caso do `nodemon` ele foi instalado com a flag `-D` e por isso estará disponível somente no ambiente de desenvolvimento. Já o `debug` foi instalado com a flag `-P` e por isso estará disponível nos ambientes de desenvolvimento e também de produção. Para mais informações sobre o `npm install` e suas flags consulte a documentação [aqui](https://docs.npmjs.com/cli/install).

Você pode ter notado que com essa instalação o arquivo `package.json` foi alterado e um novo arquivo chamado `package-lock.json` foi criado, esses arquivos armazenam informações sobre as dependências do nosso projeto e essas alterações dizem quais bibliotecas e quais versões foram instaladas, facilitando que qualquer pessoa possa copiar nosso projeto e instalar todas as dependências necessárias. As bibliotecas por sua vez são instaladas no diretório `node_modules`, esse diretório não é salvo para nosso repositório devido as configurações do arquivo `.gitignore`.

#### Ferramenta `nodemon` e comando `npx`

A ferramenta nodemon monitora os arquivos do projeto e reinicia o Node.JS sempre que alguma mudança for detectada. Inicialmente nós não vamos precisar de nenhuma configuração para usar essa ferramenta, basta abrir um terminal no diretório do projeto e digitar `npx nodemon` para executar. Acesse o servidor no navegador e veja o resultado, depois altere a mensagem no arquivo `index.js` e salve, atualize a página do navegador e a mudança deverá aparecer pois o nodemon já reiniciou o Node.js. A documentação do nodemon você encontra [aqui](https://nodemon.io/).

O comando `npx` permite executar as ferramentas instaladas com o `npm` no diretório do nosso projeto sem que seja necessário configurar o caminho para os executáveis (variável PATH) dessas ferramentas.

Você encontra a documentação do npx [aqui](https://www.npmjs.com/package/npx).

#### Biblioteca debug

A biblioteca debug permite inserir mensagens em nosso código para serem exibidas no console de forma muito semelhante a função `console.log`. Porém, ao utilizar a biblioteca debug você pode definir quando essas mensagens devem ou não serem exibidas por meio da variável de ambiente DEBUG. Boiou? Calma que você já vai entender! ;)

O primeiro passo é importarmos a biblioteca, isso é feito usando a função require como sempre. Só que dessa vez você vai perceber que a chamada para o require está com um conjunto de parênteses e um argumento a mais, assim:

```js
const debug = require('debug')('servidor');
```

Isso porque a biblioteca debug exporta uma função, que é usada para definir o _namespace_ das mensagens que serão exibidas no console. _Namespace_ é só um identificador que podemos usar para saber de onde vem as mensagens que estão sendo exibidas no console, e também para filtrarmos quais mensagens devem ser exibidas ou não. O código acima poderia ser reescrito de forma didática assim:

```js
const bibliotecaDebug = require('debug');
const debug = bibliotecaDebug('servidor');
```

O resultado é o mesmo, porém a primeira forma é mais sucinta e é a forma utilizada normalmente, então não tem jeito, você vai precisar se acostumar.

Depois que a função `debug` foi criada e configurada nós podemos utilizá-la da mesma forma que a função `console.log`, simplesmente chamando `debug('mensagem')`. Se você executar o código agora, provavelmente nenhuma mensagem será exibida. Para exibir você deve definir a variável de ambiente DEBUG informando de quais _namespaces_ você quer ver as mensagens. No Prompt de Comando do Windows você pode fazer assim:

```
set DEBUG=servidor & node index.js
//ou
set DEBUG=servidor & npx nodemon
```

No caso nós definimos que somente as mensagens do _namespace_ servidor serão mostradas. Você pode definir vários _namespaces_ diferentes separados por vírgula, ou usar asterisco para mostrar todos. Saiba, porém, que diversas bibliotecas utilizam a biblioteca debug, e se você mostrar tudo (\*) as mensagens dessas bibliotecas também serão mostradas. Dẽ uma olhada na documentação da biblioteca debug [aqui](https://www.npmjs.com/package/debug).
