// file:///Users/julio/Desktop/Escalab/js_master_gen1_2_11_20/Clase5/clase5.html

function codeBlocker(){

  console.log("Inicio")
  var inicial = 0;
  var start = new Date();
  while(inicial < 2000000000){
    inicial++;
  }
  var end = new Date()
  console.log('Fin: demoró ', end - start, 'ms')

}

var promise = new Promise(function(resolve, reject){
  resolve(33)
})

function ejemploPromesa(){
  console.log('1ra ejecución')

  new Promise(function(resolve, reject){
    resolve()
    return 'hola';
  }).then(function(){
    console.log('2da ejecución')
  })

  console.log('3ra ejecución')
}

var promesa1 = new Promise(function(resolve, reject){
  resolve({ a: 1 })
}).then(function(respuesta){
  // console.log("respuesta: ", respuesta)
})

function llamarPromesa(){
  var result;
  var promise = new Promise(function(resolve){
    resolve('promesa resuelta!')
  })
  promise.then(function(respuestaResolve){
    console.log("then: ",respuestaResolve)
    result = respuestaResolve;
    console.log("result: ", result)
  })
  console.log(result)
}

function llamarFuncionSync(){} // return undefined implicito

async function llamarFuncionAsync(){ // return Promise
  var result;
  var result2;
  
  var promise1 = new Promise(function(resolve){
    resolve(100)
  })

  var promise2 = new Promise(function(resolve){
    resolve(10000)
  })

  result = await promise1;
  result2 = await promise2;

  console.log(result)
}

// Fetch

// GET -> traer informacion
// POST -> crear información o también traer información
// PUT -> actualizar información
// DELETE -> eliminar información

function llamarFetch(){
  fetch(
      'https://5f79f3e1e402340016f935ed.mockapi.io/js_return_1',
      { method: 'GET' },
    ).then(function(respuesta){
      return respuesta.json()
    }).then(function(respuestaParseada){
      console.log(respuestaParseada)
    })
    .catch(function(error){
      console.log("error: ",error)
    });
}


function llamarApi1(){
  return fetch('https://5f79f3e1e402340016f935ed.mockapi.io/js_return_1')
}

function llamarApi2(){
  var valor1 = 'perro'
  return fetch('https://5f79f3e1e402340016f935ed.mockapi.io/js_return_2?valor1'+valor1 ,
  { 
    method: 'POST',
    body: {
      username: 1, 
      password: 'juan',
    },
  )
}

function parseIntoJson(response){
  return response.json();
}

async function llamarApis(){
  var respuestas = await Promise.all([
    llamarApi1(),
    llamarApi2()
  ])

  console.log("respuestas: ",respuestas)

  var respuestasParseadas = await Promise.all([
    parseIntoJson(respuestas[1]),
    parseIntoJson(respuestas[0]),
  ]);

  console.log(respuestasParseadas)
}

async function llamarCarreraApis(){
  var primeroEnResponder = await Promise.race([
    llamarApi1(),
    llamarApi2()
  ]);
  console.log(primeroEnResponder)
}
