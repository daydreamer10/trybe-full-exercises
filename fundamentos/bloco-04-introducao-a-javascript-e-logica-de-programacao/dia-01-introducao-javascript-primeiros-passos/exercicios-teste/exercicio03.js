//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let a = 3;
let b = 0;
let c = 3;

if (a > b && a > c) {
  console.log('O elemento a é o maior elemento.');    
}
else if (b > a && b > c) {
  console.log('O elemento b é o maior elemento.');
}
else if (c > a && c > b) {
  console.log('O elemento c é o maior elemento.');
}
else if (a === b && a === c && b === c) {
  console.log('Todos os elementos são iguais.');
}
else {
  console.log('Há dois valores iguais!!!');
}

