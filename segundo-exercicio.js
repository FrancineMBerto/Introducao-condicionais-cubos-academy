// mesmo enunciado do primeiro-exercicio.js porém adicionados: 
// agora o cliente pode dividir até 12 vezes
// a partir de 7x até 12x será aplicada uma taxa de juros de 1% ao mês
// calcule o novo montante a pagar com a seguinte formula M= C.(1+i)n (n<- na potencia)

//minha resolução abaixo ::::::::::
let produto = 100;
const promocao = 0.10; // 10%

const aVista = false;  // terá de mudar para true ou false, se quer ou não parcelar!
const parcelado = true;
const quantParcelas = 12;

const produtoComDesconto = produto - (produto * promocao);
const pagamentoParcelado = ((produto / quantParcelas));
const taxaDeParcelamento = pagamentoParcelado + (produto * 0.01);

const pagamento = (aVista === true) ? (`O produto custará ${produtoComDesconto} reais.`) : (`O produto foi parcelado em ${quantParcelas} vezes de R$ ${pagamentoParcelado}.`);

if (quantParcelas >= 7 && quantParcelas <= 12) {
   console.log(` O produto foi parcelado em ${quantParcelas} vezes.  O cliente pagará R$ ${taxaDeParcelamento} ao mês durante ${quantParcelas} meses`);
}
else if (quantParcelas < 7) {
   console.log(pagamento);
} else {
   console.log("Inválido o número de parcelas")
}

// considerações finais, meu código ficou mais extenso e não intuitivo,
// foi a primeira maneira que encontrei para resolver da melhor forma com minhas limitações, 
// mas agora saberei a forma certa e mais acertiva ! =D


// resolução do instrutor ::::::::::::

const valorDaCompra = 100;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
   // a vista com 10% de desconto
   const desconto = valorDaCompra * 0.10
   const valorAPagar = valorDaCompra - desconto;

   console.log(`Você deve pagar ${valorAPagar}, pois à vista tem 10% de desconto.`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
   // parcelado sem juros
   const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
   console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros parcelas de R$ ${valorDaParcela}`)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
   // parcelado com juros;
   const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
   const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
   console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidência de juros.`)
} else {
   // número de parcelas inválido;
   console.log("Número de parcelas inválido.")
}