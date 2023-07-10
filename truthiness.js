// truthiness é uma definição do javascript;
// verifica algo que não é uma verificação explícita;
//observe que se você colocar 0 (zero) dará false ("Deu falso");

const x = 18;

if (x) {
   console.log("Deu verdadeiro"); // truthy
} else {
   console.log("Deu falso"); // falsy
}


// se não tiver nome, por favor preencha o seu.
const nome = "";
if (!nome) {
   console.log("Por favor, preencha seu nome.");
}