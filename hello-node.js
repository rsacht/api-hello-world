//Importando o módulo Http do Node.js para escutar as chamadas na porta 8180
var http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-Type':'text/plain'
    });
    res.end('Node.js: Olá!');
    console.log('Olá, manipulador solicitado');
}).listen(8180, '127.0.0.1', ()=>{
    console.log('Servidor Http Node.js rodando em http://127.0.0.1:8180');
});