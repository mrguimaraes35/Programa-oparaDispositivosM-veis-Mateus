// comentario de uma linha

/*
comentario em bloco
*/

//variaveis
// var -> não usa no dia a dia
var nome = "João José";
let idade = 25;
const cidade = "Brasília";



//Exemplos de Variáveis
var indefinido; // undefined
var _condicao = false; // Boolean
var x = 2019; // Número sem decimal
var juros = 2.56; // Número com decimal
let $mensagem = 'Olá Mundo!'; // String
let pessoa = { nome: "José"

, idade: 30 }; // Objeto

let carros = ["Audi"
,
"Volvo"
,
"BMW"]; // Array

const soma = (a, b) => a + b; // Função
const PI = 3.141592653589793; // Variável imutável
PI = 3.14; // Atribuição inválida
var variavel; // Variável inválida


//Tipos de Dados
let nome = "Gustavo"; // string
let idad = 25; // number
let ativo = true; // boolean
let vazio = null; // null
let indefinido; // undefined


//Manipulação de Strings

let str = "Gustavo"; // string
let tamanho = str.length; // 7
let maiusculas = str.toUpperCase(); // "GUSTAVO"
let minusculas = str.toLowerCase(); // "gustavo"
let primeiraLetra = str[0]; // "G"
let ultimaLetra = str[str.length - 1]; // "o"
let posicao = str.indexOf("t"); // 2
let substituir = str.replace("Gustavo"
,
"Clay"); // "Clay"

/*
Operadores
+ soma ou concatenação
- subtração
* multiplicação
/ divisão
% resto da divisão
++ incremento
-- decremento
= atribuição
+= soma ou concatenação e atribuição
-= subtração e atribuição
*= multiplicação e atribuição
/= divisão e atribuição
%= resto e atribuição
*/

//Aritméticos:
let soa = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let resto = 10 % 3;





import {calcularIMC} from "./calcularIMC"

const res = calcularIMC(80, 170)

console.log(res);
