/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const frase = prompt('Digite uma frase ou palavra para que seja realizada a inversão: ')

function inverterString(str) {
    var vazio = '';
    for (var i = str.length - 1; i >= 0; i--) {
        vazio += str[i];
    }
    return vazio;
}

alert(inverterString(frase));