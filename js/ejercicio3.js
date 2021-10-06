'use strict'
let numaleatorio = 0;
let numaleatorio2 = 0;
let arraynumeros = [];
let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//document.write(numaleatorio2, '</br>');

for (let i = 0; i < 10; i++) {
    numaleatorio2 = random(-150, 150);
    arraynumeros[i] = numaleatorio2;
    document.write(arraynumeros[i],'</br>')
    if(arraynumeros[i]<0){
      contador++;
      //document.write('Valores negativos ',arraynumeros[i],'</br>')
    }
    if(arraynumeros[i]>15){
      contador2++;
    }
    if(arraynumeros[i]%15==0){
      contador3++;

    }
    if(arraynumeros[i]%2==0){
      contador4++;
    }
}
document.write('El los numero negativos que hay son: ',contador,'</br>');
document.write('La cantidad de numero mayores de 15 son: ',contador2,'</br>')
document.write('Es multiplo de 15: ',contador3,'</br>')
document.write('La cantidad de numeros pares son: ',contador4,'</br>')
