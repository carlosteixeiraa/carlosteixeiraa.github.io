var express = require('express');
var site = express();
var caminho = require("path");
var porta = 3000;

// Ficheiros estaticos
site.use(express.static(__dirname + '/public'));

// Site a escutar
site.listen(porta)
console.log('Site a escutar na porta ' + porta);
console.log('Entre em localhost:' + porta + ' para aceder ao site!')
