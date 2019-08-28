# Declarações de Prova

### Desenvolvimento Web 2 - Prof. Eduardo P de Sousa

## Descrição

Este aplicativo será desenvolvido durante a disciplina DW2 para exemplificar o processo de desenvolvimento de uma aplicação Web na linguagem JavaScript/Node.js.

Cada commit neste repositório exemplificará uma tarefa do desenvolvimento do aplicativo, desde a configuração inicial do ambiente. As diversas etapas serão descritas neste readme com os links para a documentação e guias relacionados.

## Commits

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
