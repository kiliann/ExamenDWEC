'use strict'

//introduce numero por teclado
console.log("Cargando JS");
let numero  = prompt("Escribe un numero para saber si es divisible por 2");

if (numero%2==0) {
  document.write("Es divisible por 2  ");
}else {
  document.write("No es divisible por 2  ");
}

let numero1 = numero.substring(0,1);
let numero2 = numero.substring(1,2);
let numero3 = numero.substring(2,3);

let numeroTotal = numero1 + numero2 + numero3
document.write(numeroTotal);

if (false) {
  document.write('Es divisible por 3');
}else {
  document.write('No es divisible por 3');
}
