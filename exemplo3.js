const temIngresso = true;
const censura = 16;
const idade = 13;
const estaComOsPais = true;

//  || ou
// não precisa comparar com booleano, podemos omitir ===true quando queremos saber se é verdadeiro ...
if (temIngresso) {
   if (idade >= censura || estaComOsPais) {
      console.log("Pode Assistir!");
   } else {
      console.log("Não pode Assistir!");
   }
} else {
   console.log("Não pode Assistir!");
}