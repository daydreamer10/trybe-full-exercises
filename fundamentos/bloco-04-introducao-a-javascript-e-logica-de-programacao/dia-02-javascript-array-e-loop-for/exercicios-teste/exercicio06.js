//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];

//Declara variável soma e a inicializa com zero.
sum = 0;

//percorre o array number.
for (var i = 0; i < numbers.length; i += 1) {
  //console.log(numbers[i]);
  //Teste para filtrar os números ímpares
  //if (numbers[i] % 2 === 1) { 
  if (numbers[i] % 2 != 0) {
   // console.log(numbers[i]);
   //contador de números ímpares sum.
    sum = sum + 1;
  }
}
//Teste condicional para determinar o número exato de números ímpares no array.
if (sum > 0) {
  console.log('Existem ' + sum + ' números ímpares no array.')
} else {
  console.log('Nenhum valor ímpar encontrado no array.')
}
