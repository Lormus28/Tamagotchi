/*
	Declaro los atributos del status
*/
let interval;
let hungry = 100;
let sleep = 100;
let hygiene = 100;
let fun = 100;
let alive = true;

/*
	Función que actualiza la página cada cierto tiempo
*/
function Loop(time = 2){

  function petStatus() {
    if (hungry > 75 && sleep > 75 && hygiene > 75 && fun > 75) {
      document.getElementById("pet").src="img/blue.jpg";
    }
    else if (hungry > 50 && sleep > 50 && hygiene > 50 && fun > 50) {
      document.getElementById("pet").src="img/green.jpg";
    }
    else if (hungry > 25 && sleep > 25 && hygiene > 25 && fun > 25) {
        document.getElementById("pet").src="img/yellow.jpg";
    }
    else if (hungry > 0 && sleep > 0 && hygiene > 0 && fun > 0) {
        document.getElementById("pet").src="img/gray.jpg";
    }
    else {
      alive = false;
    }
  }

  petStatus();
  /*
	 Si alguno de los atributos llega a cero, la mascota muere
  */
  if(!alive){
     document.getElementById("pet").src="img/black.jpg";
     document.getElementById('message').innerHTML = 'Your pet died. Please refresh your page';
     disabledButtons();
     stop();

  } else {
    hungry = hungry - parseInt(time);
    sleep = sleep - parseInt(time);
    hygiene = hygiene - parseInt(time);
    fun = fun - parseInt(time);
  }

  /*
	 Control de al barra de estado de la mascota
  */
  document.getElementById('hungry').style.width = hungry + 'px';
  document.getElementById('sleep').style.width = sleep + 'px';
  document.getElementById('hygiene').style.width = hygiene + 'px';
  document.getElementById('fun').style.width = fun + 'px';

  /*
	 Control del porcentaje de estado de la mascota
  */
  document.getElementById('hungry').innerHTML = hungry + '%';
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('hygiene').innerHTML = hygiene + '%';
  document.getElementById('fun').innerHTML = fun + '%';
}

/*
	Funcion que inicia y llama el temporizador de la funcion Loop
*/
function Start(){
  interval = setInterval(Loop, 1000);
}

function stop() {
  clearInterval(interval);
}

/*
	Funcion que recupera el hungry
*/
function Eat(){
  hungry = recover(hungry);
  document.getElementById('hungry').innerHTML = hungry + '%';
  document.getElementById('hungry').style.width = hungry + 'px';
}

/*
	Funcion que recupera la hygiene
*/
function Bath(){
  hygiene = recover(hygiene);
  document.getElementById('hygiene').innerHTML = hygiene + '%';
  document.getElementById('hygiene').style.width = hygiene + 'px';
}

/*
	Funcion que recupera el sueño
*/
function Sleep(){
  sleep = recover(sleep);
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('sleep').style.width = sleep + 'px';
}

/*
	Funcion que recupera la fun
*/
function Jump(){
  fun = recover(fun);
  document.getElementById('fun').innerHTML = fun + '%';
  document.getElementById('fun').style.width = fun + 'px';
}

function recover(characteristic) {
  if (alive) {
    characteristic = characteristic + 30;
  }

  if (characteristic > 100) {
    return 100;
  }

  return characteristic;
}

function disabledButtons() {
  document.querySelector('#buttonEat').disabled = true;
  document.querySelector('#buttonSleep').disabled = true;
  document.querySelector('#buttonBath').disabled = true;
  document.querySelector('#buttonJump').disabled = true;
}

/*
  Ejecución del temporizador
*/
Start();
