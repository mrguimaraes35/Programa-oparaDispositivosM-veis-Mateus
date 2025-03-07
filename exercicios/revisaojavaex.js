function manipularString(str, letraAntiga, letraNova) {
    console.log(`Original: ${str}`);
    console.log(`Maiúsculas: ${str.toUpperCase()}`);
    console.log(`Minúsculas: ${str.toLowerCase()}`);
    console.log(`Invertida: ${str.split("").reverse().join("")}`);
    console.log(`Substituição: ${str.replaceAll(letraAntiga, letraNova)}`);
}

// Teste com a string "JavaScript" e substituindo "a" por "@".
manipularString("Mateus", "a", "@");






//ex2

function operacoes(n1, n2) {
    console.log(`Soma: ${15 + 5}`);
    console.log(`Subtração: ${15 - 5}`);
    console.log(`Multiplicação: ${15 * 5}`);
    console.log(`Divisão: ${15 / 5}`);
    console.log(`O primeiro número é maior que o segundo? ${15 > 5}`);
}
operacoes(15, 5);
/*
cont soma = 15 + 5
let subtracao = 15 - 5;
let multiplicacao = 15 * 5;
let divisao = 15 / 5;
let maior = 15 < 5; // 15 é maior que 5
*/




//ex 3


function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade.";
    } else if (idade >= 65) {
        return "Idosa.";
    } else {
        return "Maior de idade.";
    }
}

let idadeTeste = 70;
console.log(`Idade: ${idadeTeste} - ${verificarIdade(idadeTeste)}`);



//ex4

for (let i = 1; i < 100; i++) {
    console.log(i);
    }

//ex5

function calcularValores(num) {
    return {
        dobro: num * 2,
        triplo: num * 3,
        quadrado: num ** 2
    };
}

// Definindo a variável antes de usá-la
let numeroTeste = 5;
let resultado = calcularValores(numeroTeste);

console.log(`Número: ${numeroTeste}`);
console.log(`Dobro: ${resultado.dobro}`);
console.log(`Triplo: ${resultado.triplo}`);
console.log(`Quadrado: ${resultado.quadrado}`);


//ex 6

function manipularArray(arr, novoNumero) {
    console.log(`Array original: ${arr}`);

    // Adiciona um número ao final do array
    arr.push(novoNumero);
    console.log(`Após adicionar ${novoNumero}: ${arr}`);

    // Remove o primeiro número do array
    arr.shift();
    console.log(`Após remover o primeiro número: ${arr}`);

    // Encontra o maior número do array
    let maior = Math.max(...arr);
    console.log(`Maior número: ${maior}`);

    // Encontra o menor número do array
    let menor = Math.min(...arr);
    console.log(`Menor número: ${menor}`);
}

// Teste com o array [10, 20, 30, 40, 50] e adicionando o número 60
manipularArray([10, 20, 30, 40, 50], 60);


//ex7

function manipularStrings(arr) {
    console.log(`Array original: ${arr}`);

    // 1. 
    let maiusculas = arr.map(str => str.toUpperCase());
    console.log(`Maiúsculas: ${maiusculas}`);

    // 2. 
    let filtradas = arr.filter(str => str.toLowerCase().startsWith('a'));
    console.log(`Strings que começam com 'A': ${filtradas}`);

    // 3. 
    let comprimentos = arr.map(str => str.length);
    console.log(`Comprimento de cada string: ${comprimentos}`);
}

// Teste com o array ["Maçã", "Banana", "Abacaxi", "Laranja"]
manipularStrings(["Maçã", "Banana", "Abacaxi", "Laranja"]);

//ex8

function manipularObjeto(pessoa) {
    console.log("Objeto original:", pessoa);

    // 1. )
    pessoa.profissao = "Engenheiro";
    console.log("Após adicionar profissão:", pessoa);

    // 2. 
    delete pessoa.cidade;
    console.log("Após remover cidade:", pessoa);

    // 3. 
    console.log("Propriedades do objeto:", Object.keys(pessoa));
}

// Teste com o objeto 
let pessoaTeste = { nome: "Mateus", idade: 20, cidade: "Distrito federal" };
manipularObjeto(pessoaTeste);

//ex9
const livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

// 1. 
const { titulo, autor } = livro;
console.log(`Título: ${titulo}`);
console.log(`Autor: ${autor}`);

// 2. 
function obterDescricaoLivro({ titulo, autor }) {
    return `O livro "${titulo}" foi escrito por ${autor}.`;
}

// Teste da função
console.log(obterDescricaoLivro(livro));
