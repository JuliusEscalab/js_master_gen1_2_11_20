// Funciones Puras e Imputas

// Función pura
function cuadrado(x) {
  return x * x;
}

// Función Impura
function saludo(nombre) {
  return "Hola " + nombre + " hoy es " + new Date().toLocaleString();
}

var personaJuego = {
  nombre: 'Link',
  edad: 15,
}

function cambiarEdad(persona) {
  persona.edad = persona.edad + 1;
  console.log(persona);
}

// =====

const altura = 20;

// Impura: porque el resultado depende de altura que no es una
// variable de calcularAlto
function calcularAlto(valorBase) {
  return valorBase * altura;
}

function calcularAlto(valorBase, altura) { // pura
  return valorBase * altura;
}

// 
// ES6 Let y Const
//

function tryVar() {
  var x = 5;

  if (x == 5) {
    var x = 10;
  }

  console.log(x);
}

function tryLet() {
  let x = 5;

  if (x == 5) {
    x = 10;
  }

  console.log(x)
}

function tryLet2() {
  console.log(x)
  let x = 2;
}

function tryConst() {
  console.log(x)
  const x = 2;
}

let x = 2;
const y = 3;


// const nombre = "Julio"
// const profesion = "Desarrollador"
// const edad = 31;
// const gustos = ['Guild Wars 2', 'Legends of Zelda']

// let persona1 = {
//   nombre: nombre,
//   profesion: profesion,
//   edad: edad,
//   gustos: gustos
// }

// var persona2 = {
//   nombre,
//   profesion,
//   edad,
//   gustos
// }

const armarFicha = function (
  nombre,
  profesion = null,
  edad = 0,
  gustos = []
) {
  const ficha = `
    Nombre: ${nombre}
    Profesion: ${profesion}
    Edad: ${edad}
    Gustos: ${gustos}
  `
  return ficha
}

// SPREAD operator

const texto = "texto"
const textoEnArray = [...texto]
const textoEnObjeto = {...texto}

const misMascotas = ['perros', 'canarios']
const otraListaMascotas = ['conejos', ...misMascotas, 'gatos', 'peces']

const misPropiedades = { b: 'b', c: 'c'}
const otrasPropiedades = {a: 'a', ...misPropiedades,  d: 'd', e: 'e'}

function spreadFunction(a,b, ...restoDeVariables){
  return `${a} ${b} ${restoDeVariables}`
}

// DESTRUCTURING

const desarrollador1 = {
  nombre: 'Julio Orellana',
  profesion: {
    titulo: 'Ingeniería en Informática',
    cargo: 'Desarrollador'
  },
  edad: 31,
  gustos: ['Guild Wars 2', 'Legends of Zelda', 'Leyenda de Aang', 'Genshin Imapct'],
};

const desarrollador2 = {
  nombre: 'Link',
  profesion: {
    titulo: 'Guerrero de Hyrule',
    cargo: 'Desarrollador'
  },
  edad: 31,
  gustos: ['Guild Wars 2', 'Legends of Zelda', 'Leyenda de Aang', 'Genshin Imapct'],
};

const {
  nombre = 'Sin Nombre',
  profesion: { 
    titulo, 
    cargo,
  }, 
  edad, 
  gustos: {primerGusto, ...restoDeGustos},
} = desarrollador1;

const { nombre: nombreDesarrollador2, profesion: { titulo: tituloDesarrollador2} } = desarrollador2;

// console.log("Desarrollador 1: ",nombre)
// console.log("Desarrollador 2: ",nombreDesarrollador2, tituloDesarrollador2)

const mascota1 = {
  nombre: 'Benito',
  edad: 11
}

const mascota2 = {
  nombre: 'Charlotte',
  edad: 1,
}

const { nombre: nombreMascota1 } = mascota1;
const { nombre: nombreMascota2 } = mascota2;

// console.log(nombreMascota1, nombreMascota2)

function infoMascota1(mascota){
  return `Nombre: ${mascota.nombre}, edad: ${mascota.edad}`
}

function infoMascota2(mascota){
  const { nombre, edad } = mascota;
  return `Nombre: ${nombre}, edad: ${edad}`
}

// Esta es la que se debería ocupar siempre 
function infoMascota3({ nombre, edad }){
  return `Nombre: ${nombre}, edad: ${edad}`
}

function infoMascota4({
  nombre = 'Sin nombre',
  edad = 'Sin Edad',
} = { nombre: 'Default', edad: 0}){
  return `Nombre: ${nombre}, edad: ${edad}`
}

