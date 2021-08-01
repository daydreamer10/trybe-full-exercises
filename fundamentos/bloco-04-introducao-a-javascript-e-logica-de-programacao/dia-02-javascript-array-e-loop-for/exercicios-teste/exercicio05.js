//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Declara a variável maiorValor que fará o teste das posições.
maiorValor = 0;

for (var index = 0; index < numbers.length; index += 1) {
  //console.log(numbers[index]);
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
//Escreve maior valor encontrado.
console.log('**********');
console.log(maiorValor);
console.log('**********');
