/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . Bonus: use somente um if */

//Declaração de variáveis:
let num01 = 1;
let num02 = 1;
let num03 = -2;

//Teste condicional para verificar se pelo menos um núero é par:
if (num01 % 2 === 0 || num02 % 2 === 0 || num03 % 2 === 0) {
  console.log(true)
} else {
  console.log(false);
  }
