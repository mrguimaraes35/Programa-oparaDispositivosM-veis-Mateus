export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}



import moment from 'moment';

function calcularIdade(anoNascimento) {
    const anoAtual = moment().year();  
    return anoAtual - anoNascimento;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`)
console.log()