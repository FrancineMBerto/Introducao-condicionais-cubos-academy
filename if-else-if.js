const idade = 15

if (idade < 18) {
   console.log("Menor de idade!");

} else if (idade <= 65) {
   console.log("Adulta!");

} else {
   console.log("Idosa!");
}





// problema: ao invés de só saber se a pessoa é maior de idade ou não
// devemos encaixá-la em uma das 3 categorias a partir da sua idade
// se for menor de 18 -> menor de idade
// maior de idade, mas menor ou igual a 65 -> adulto
// se for acima de 65 anos -> idoso