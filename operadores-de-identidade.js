// identico (ter o mesmo conteúdo e tipo (number e 18) e === é uma pergunta!);

let x = "5"

const ehIdenticoFalse = 5 === x; //false (18 number não é identico ao "18" do tipo string.)
console.log(ehIdenticoFalse);

const ehIdenticoTrue = x === x; //true (strings iguais) (Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo) Estritamente igual ===
console.log(ehIdenticoTrue);

const naoEhIdenticoFalse = x !== x; //false
console.log(naoEhIdenticoFalse)

const naoEhIdenticoTrue = 5 !== x; //true (Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.) Estritamente Diferente !==
console.log(naoEhIdenticoTrue)

// independente do tipo o igual (?) dá true 
const ehIgualTrue = 5 == x; //true
console.log(ehIgualTrue)

