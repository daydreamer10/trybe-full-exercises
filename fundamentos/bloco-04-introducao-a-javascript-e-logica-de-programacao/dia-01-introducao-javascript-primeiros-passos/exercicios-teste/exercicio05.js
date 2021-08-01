/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Atenção: Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

//Declaração de variáveis:
let a = 45;
let b = 45;
let c = -8;

//Verificando se todos os ângulos do triângulo são positivos:
if (a >= 0 && b >= 0 && c >= 0) {
  //Verificando se todos os ângulos somados do triângulo são iguais a 180 graus.
  if (a + b + c === 180) {
  console.log('Esses valores REPRESENTAM os ângulos internos de um triângulo.'); 
  }
  else {
    console.log('Esses valores NÃO representam os ângulos internos de um triângulo.');
  } 
} else {
  console.log('valor inválido, pois possui ângulo negativo.')   
  }
