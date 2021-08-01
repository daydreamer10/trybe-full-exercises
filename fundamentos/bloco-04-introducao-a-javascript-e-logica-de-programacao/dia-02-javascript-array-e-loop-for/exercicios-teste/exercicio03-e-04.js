//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Declara a variável soma e a inicializa com zero.
sum = 0;

//Percorre o array numbers e soma os elementos.
for (let number of numbers) {
  sum = sum + number;
}

//declara a variável average para efetuar a média aritmética dos valores contidos no array:
let average = sum / numbers.length;

//escreve o resultado: 
console.log(average);


//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (average > 20) {
  console.log('valor maior que 20.') 
} else {
  console.log('valor menor ou igual a 20.')
}

