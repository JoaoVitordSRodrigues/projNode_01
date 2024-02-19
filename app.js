//exibindo mensagem
//console.log("mensagem de texto!") 


/*OPERAÇÕES
 var n1 = 10
var n2 = 10

var tSoma = n1 + n2
var tSub = n1 - n2
var tDiv = n1 / n2
var tMult = n1 * n2
console.log("Total soma: " + tSoma) // o '+' é para concatenar strings
*/

/*
var n1 = 10
var n2 = 10

var total = n1 + n2

console.log("Total: " + total)

if(total <= 10){
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}
//para executar o comando no cmd -> node nomeAplicação.js

*/

//CHAMANDO A FUNÇÃO DO ARQUIVO soma.js
//require é tipo um import
/*var soma = require('./soma.js')

console.log("Total: " + soma(10,10))
*/


var http = require("http")

http.createServer(function(req, res){
    res.end("Mensagem oia ai oia la")//tras um resposta
}).listen(8081)

console.log("Servidor Ativo!")
