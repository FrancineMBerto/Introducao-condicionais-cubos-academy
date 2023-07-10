// o cliente recebe desconto de 10% pagando a vista // o cliente pagar em até 6x, mas sem desconto;
// imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor da parcela;

//minha reolução abaixo ::::::::::::

let produto = 300;
const promocao = 0.10; // 10%

const aVista = false;
const parcelado = true;
const quantParcelas = 6;

const produtoComDesconto = produto - (produto * promocao);
const pagamentoParcelado = (produto / quantParcelas).toFixed(2);

const pagamento = (aVista === true) ? (`O produto custará ${produtoComDesconto} reais.`) :
   (`O produto foi parcelado em ${quantParcelas} vezes de R$ ${pagamentoParcelado}.`);

console.log(pagamento);


//resolução do instrutor abaixo :::::::

const valorDaCompra = 300;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) {
   // a vista com 10% de desconto
   const desconto = valorDaCompra * 0.10
   const valorAPagar = valorDaCompra - desconto;

   console.log(`Você deve pagar ${valorAPagar}, pois à vista tem 10% de desconto.`)
} else {
   // parcelado
   const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
   console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
}