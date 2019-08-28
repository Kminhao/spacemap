const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Olá no console!');
  res.end('Ola no navegador!');
});

server.listen(3000, () => {
  console.log(
    'Para acessar o servidor abra o navegador e navegue para o endereço: http://localhost:3000/'
  );
});
