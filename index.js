const http = require('http');

const debug = require('debug')('servidor');
debug('script em execução');

const server = http.createServer((req, res) => {
  debug('requisição recebida');
  console.log('Olá no console!');
  res.end('Ola no navegador!');
});

server.listen(3000, () => {
  debug('servidor inicializado');
  console.log(
    'Para acessar o servidor abra o navegador e navegue para o endereço: http://localhost:3000/'
  );
});
