const saldo = 1;

const unidade = (saldo === 1 ? "real" : "reais"); //estrutura do ternário que equivale ao codigo if comentado.

console.log(`Você tem ${saldo} ${unidade}.`);


// abaixo o mesmo, com if
// if (saldo === 1) {
//    console.log(`Você tem ${saldo} real.`);
// } else {
//    console.log(`Você tem ${saldo} reais.`);
// }



// Ternário
// condição ? expr1 : expr2
// Condição é sempre uma expressão que será avaliada como verdadeiro ou falso.
// expr1 e expr2 são expressões que contém valores de qualquer tipo, que serão retornados.
// Caso a condição seja verdadeira, expr1 é retornado. Caso contrário, sendo falsa retornará expr2.
