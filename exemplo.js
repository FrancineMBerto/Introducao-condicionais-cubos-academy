// minha resolução:: 

const temIngresso = false;
const censura = 16;
const idade = 18;

if (temIngresso === (idade >= censura)) {
   console.log("Pode Assistir!")
} else {
   console.log("Não pode Assistir!");
}

// resolução do instrutor:: (mostrou falta de ingresso )



if (temIngresso === true) {
   if (idade >= censura) {
      console.log("Pode Entrar");
   } else {
      console.log("Barrada");
   }
} else {
   console.log("Barrada por falta de ingresso.");
} 