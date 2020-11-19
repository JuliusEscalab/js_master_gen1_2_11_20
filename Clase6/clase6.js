// Timers

function llamarTimer(){
  console.log("inicio")
  setTimeout(function(nombre){
    console.log(nombre)
  }, 1000 * 5, "julio")

  setInterval(function(id, nombre, tienePerro){
    console.log("interval: ", id, nombre, tienePerro)
  }, 1000, 1, "julio", false)
}

function quienPrimero(){
  setTimeout(function(){
    console.log('setTimeout')
  }, 0);

  var promise = new Promise(function(resolve, reject){
    resolve('new Promise')
  });

  promise.then(function(response){
    console.log(response)
  })

  Promise.resolve('promiseResolve').then(function(response){
    console.log(response)
  });

  return 'quienPrimero()'
}

var currentValue = 0
function timeoutLoop(){
  setTimeout(function(){
    currentValue++;
    console.log('timeoutLoop');
    timeoutLoop()
  }, 0)
}
// file:///Users/julio/Desktop/Escalab/js_master_gen1_2_11_20/Clase6/clase6.html

function promiseLoop(){
  Promise.resolve(0).then(function(){
    currentValue++;
    if(currentValue == 1000){
      return
    }
    console.log("promiseLoop")
    promiseLoop()
  })
}


function fetchSomething(){
  console.log('Cargando... !')
  var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Listo!')
    }, 5000)

    setTimeout(function(){
      reject('Timeout!')
    }, 3000)
  })

  promise.then(function(response){
    console.log(response)
  })

  promise.catch(function(error){
    console.log(error)
  })
}

function fetchMockApi(){
  
  var promise = new Promise(function(resolve, reject){
    fetch(
      'https://5f79f3e1e402340016f935ed.mockapi.io/js_return',
      {
        method: 'GET',
      }
    ).then(function(response){
      resolve(response)
    })

    setTimeout(function(){
      reject('FIN')
    },1000)
  });

  promise.then(function(response){
    console.log(response)
  })

  promise.catch(function(error){
    console.log(error)
  })
}

function cancelarTimeout(){
  var timeout1 = setTimeout(function(){
    console.log('timeout 1');
  }, 5000)
  
  var timeout2 = setTimeout(function(){
    console.log('timeout 2');
  }, 5000)

  clearTimeout(timeout1)
  clearTimeout(timeout2)
}

function cancelarInterval(){
  var interval1 = setInterval(function(){
    console.log('interval 1')
  }, 1000)
  
  var interval2 = setInterval(function(){
    console.log('interval 2')
  }, 1000)
  
  clearInterval(interval1)
  clearInterval(interval2)
}

var clockTimer;
function startTime(){
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  minute = addZeroBeforeNumber(minute);
  second = addZeroBeforeNumber(second);

  document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second

  clockTimer = setTimeout(function(){
    startTime()
  }, 500)
}

function addZeroBeforeNumber(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Manejo de Excepciones

// try{
//  ...lo que queremos ejecutar
// }catch(error){
//  ...los errores atrapados
// }

function primerTryCatch(){
  try{
    nombre
  }catch(error){
    console.log(error)
  }
}

function throwTryCatch(value){
  try{
    if(value === 5){
      throw new Error('no puede ser 5')
    }
    if(value === 4){
      throw 'no puede ser 4'
    }
    console.log("Fin Try")
  }catch(error){
    console.log("error: ",error)
  }
}

function errorTypes(value){

  console.log("Loading!")

  try{
    if(value == 1){
      Number.toFixed()
    }
    if(value == 2){
      new Array(Math.pow(2, 40))
    }
    if(value == 3){
      console.log(variableInvalida)
    }
    if(value == 4){
      throw new Error('custom error')
    }

    if(value == 5){
      fetch('https://5f79f3e1e402340016f935ed.mockapi.io/js_return_')
    }
  }catch(error){
    console.log(typeof error, error)
  }finally{
    console.log("Fin loading")
    console.log("finally")
  }
}

async function callTryCatch(){
  var loading = document.getElementById('loading')
  loading.innerHTML = "Cargando..."

  var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject('finish');
    }, 5000);
  })

  try{
    var response = await promise;
    console.log("response: ", response)
  }catch(error){
    console.warn("warn: ",error)
  } finally {
    loading.innerHTML = 'Listo!'
  }


}