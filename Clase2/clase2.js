// Funciones

// Declaración de Función

function cuadrado(numero){
  return numero * numero;
}

function formatearNombre(nombre, apellido){
  var nombreCompleto = nombre + ' ' + apellido;
  return nombreCompleto;
}

function perimetroCirculo(radio){
  return Math.PI * radio * 2;
}

function areaCirculo(radio){
  return Math.PI * radio ** 2;
}

function fechaActual(){
  return new Date().toLocaleDateString();
}

function fechaYHoraActual(){
  return new Date().toLocaleString();
}

// Funciones Anonimas

// function(){} <- falla porque no tiene nombre asignado

var miFuncion = function(){
  return "funcion declarativa";
}

// Funciones autoejecutables

// (function () { 
//   console.log("Hola");
// })();

// Funcion con valor por defecto

function functionPorDefecto(x = 5){
  return nuevoX;
}

// Hoisting

// var a;

// console.log("valor de a: ", a);

// foo();

// function foo(){
//   console.log("Me llame b: ", b);

//   var b = 2;
// }

// Curry Function, Closures o Funciones anidadas

function sumar(primerValor){
  return function(segundoValor){
    return primerValor + segundoValor;
  }
}

function contador(contadorInicial){
  return function(incremento){
    contadorInicial++
    return contadorInicial += incremento;
  }
}

function contadorAutomatico(contadorInicial){
  return function(){
    return contadorInicial++;
  }
}

// Condicionales

var edadJuan = 25;
var edadPedro = 25;

if(edadJuan < edadPedro){
  console.log("La edad de Juan es Menor a la edad de Pedro")
}else if(edadJuan >= edadPedro){
  console.log("La edad de Juan es Mayor a la edad de Pedro")
} else {
  console.log("La edad de Juan es Igual a la edad de Pedro")
}

function estaConectado(){
  return true;
}


if(!estaConectado()){
  console.log("conectate!")
}

/**
 * || OR 
 * && Y
 * ==
 * >= <=
 * 
 */

// Ternarios

var resultado = (5 < 3 && 4 > 2 ) ? "SI" : "NO"

// Switch

function switchCase(valor){
  switch(valor){
    case 0: console.log('Es 0');
    case 1: console.log('Es 1'); break;
    case 2: console.log('Es 2'); break;
    case 3: console.log('Es 3');
    case 4: console.log('Es 4'); break;
    default: console.log('Ningún valor definido, se imprime el que entregaron: ', valor)
  }
}

function switchCaseReturn(edad){
  switch(true){
    case edad > 20: return 'Es adulto'
    case edad < 20: return 'Es joven'
    default: return 'No lo sé, adulto joven quizás? 😂'
  }
}











