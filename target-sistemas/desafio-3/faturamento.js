/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/


const dados = require('./dados.json');

let valores = [];

dados.map(obj => {
  if(obj.valor != 0.0) {
    valores.push(obj.valor)
  }
})

let min = Math.min(...valores);
let max = Math.max(...valores);
let media = valores.reduce((valorAcumulador, valorCorrente) => valorAcumulador + valorCorrente, 0) / valores.length;
let diaMaiorQueMedia = [];

dados.forEach(it => {
    if(it.valor > media) {
        diaMaiorQueMedia.push(it.valor);
    }
})

console.log("Valor mínimo: ", min)
console.log("Valor máximo: ", max)
console.log("Media mensal: ", media.toFixed(2))
console.log("Número de dias com médias maiores que a média mensal: ", diaMaiorQueMedia.length)