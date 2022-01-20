/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

let informacoes = [
    {
        estado: 'sp',
        valor: 67836.43 
    },
    {
        estado: 'rj',
        valor: 36678.66 
    },
    {
        estado: 'mg',
        valor: 29229.88 
    },
    {
        estado: 'es',
        valor: 27165.48 
    },
    {
        estado: 'outros',
        valor: 19849.53 
    }
]

var valores = [];

informacoes.map(obj => {
    if(obj.valor) {
      valores.push(obj.valor)
    }
  })

let valorTotal = valores.reduce((valorAcumulador, valorCorrente) => valorAcumulador + valorCorrente, 0);

let percentual = valores[4]/valorTotal * 100;

valores.forEach((percentual, i, arr) => {
	percentual = arr[i]/valorTotal * 100;

    console.log(percentual.toFixed(1) + "%");
});