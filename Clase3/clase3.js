var BASE_URL = "https://www.google.cl"

var miFuncion = function(){
  var miNombre = "Julio";
  console.log("BASE_URL: ", BASE_URL);
  console.log("miNombre: ", miNombre);
}

// Window

// window.closed
// window.history
// window.innerHeight
// window.outerHeight
// window.innerWidth
// window.outerWidth

// window.alert('alerta')
// window.prompt('hola')

// Location

// location.href
// location.protocol
// location.hostname
// location.search

// location.reload() 
// location.toString()
// location.assign()

// Document

// Forma antigua
// document.getElementById('elementoUnico')
// document.getElementsByClassName('elementoBase')

// Forma nueva
// document.querySelector('.elementoBase');
// document.querySelectorAll('.elementoBase');

// Closure
function definirContador(){
  var contador = 0;
  return function(){
    return contador++;
  }
}

var documentos = document.querySelectorAll('.elementoBase');

var counter = definirContador();

var llamarContador = function(){
  console.log(counter())
}

function agregarListeners(){
  console.log("Agregando listeners")
  for(var i = 0; i < documentos.length ; i++){
    documentos[i].addEventListener(
      'click',
      llamarContador,
      true
    )
  }
}

function eliminarListeners(){
  for(var i = 0; i < documentos.length ; i++){
    documentos[i].removeEventListener(
      'click',
      llamarContador,
      true
    )
  }
  console.log("Listeners Eliminados!")
}

// WEB API Storage y Session Storage

// Local Storage

function guardarVariable(valor){
  localStorage.setItem(valor, valor) // setItem(key, value)
  console.log("Se guardó en local storage")
}

function leerVariableGuardada(key){
  var variableGuardada = localStorage.getItem(key)
  alert(variableGuardada)
}

function eliminarVariableGuardada(){
  localStorage.removeItem('valor1localStorage')
  console.log('Variable eliminada!')
}

function limpiarVariablesGuardadas(){
  localStorage.clear()
  console.log('Variables eliminadas!')
}

// Session Storage

function guardarVariableSession(valor){
  sessionStorage.setItem(valor, valor) // setItem(key, value)
  console.log("Se guardó en session storage")
}

function leerVariableGuardadaSession(){
  var variableGuardada = sessionStorage.getItem('valor1localStorage')
  alert(variableGuardada)
}

function eliminarVariableGuardadaSession(key){
  sessionStorage.removeItem(key)
  console.log('Variable eliminada!')
}

function limpiarVariablesGuardadasSession(){
  sessionStorage.clear()
  console.log('Variables eliminadas!')
}
