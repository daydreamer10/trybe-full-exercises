/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if.*/

//Declaração de variáveis:
let x = 0;
let y = 0;
let z = 0;

//Teste condicional para verificar se pelo menos um número é ímpar.
if (x % 2 === 1 || y % 2 === 1 || z % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}
