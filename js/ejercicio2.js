'use strict'
let numero = 0;
let numero1 = 0;
let numero2 = 0;
let contador = 0;
numero = prompt("Introduce numeros");

while (numero != undefined) {
  contador++



   numero1 =  parseInt(numero1) + parseInt(numero);

   //numero2 = numero2 += numero1;
   numero = prompt("Introduce numeros 1");
   if(numero == ""){
     alert("No se a introducido ningun numero")
   }

}
//document.write(numero2)
let media = numero1/contador;
document.write('La suma es: ',numero1,'   ');


document.write('La media de los numeros es:  ',media,'   ');
