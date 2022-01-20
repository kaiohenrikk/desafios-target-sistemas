/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const num = prompt('Digite um número inteiro: ');

const fibonacci = () => {
  
  let soma = 0;
  let anterior = 0;
  let proximo = 1;

  for (let i = 0; i < num; i++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
  }

  if (num == anterior || num == proximo) {
    alert(`Fibonacci de ${num}: ${anterior}. O número escolhido pertence à sequência de Fibonacci.`);
  } else {
    alert(`Fibonacci de ${num}: ${anterior}. O número escolhido NÃO pertence à sequência de Fibonacci.`);
  }
  
}

fibonacci();