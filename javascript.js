/* Variables */
var numero;


/* --------  Abrir ventana  -------- */

function abrirPiramide() {
window.open("piramide.html", "", "width=200,height=100");
}



/* --------  Ingreso y Validacion numero natural -------- */
  function ingresoValidacion() {
  let numeroIngreso = prompt("Introduce un numero natural");

/* Si el numero es mayor a 0 y menor o igual a 100 lo guarda en la variable numero */

  if (numeroIngreso > 0 && numeroIngreso <= 100) {
  numero = numeroIngreso;
  console.log(numero)
  alert("El numero elegido es correcto, tu nuemero es:  " +numero);

 /* Si no calculamos uno aleatoriamente y lo guardamos en la variable numerop */
} else {
  numero = Math.floor(Math.random() * 100 + 1);
  console.log(numero)
  alert("Usaré el que yo quiera");
}
}

/*-------- Funcion calcularFecha  -------- */

  function calcularFecha(){
    console.log(numero)
  /* Guardamos en la variable date el objeto Date() que nos da la fecha */

    let date = new Date();
    let fecha;

  /* Si el numero no esta definido anteriormente por el usuario calculamos la fecha actual por 200 y lo sumamos*/
    if (numero == undefined) {

    fecha = new Date((1000 * 60 * 60 * 24 * 200) + date.getTime());

  /* Si el numero esta definido anteriormente añadimos a la cuenta el valor de la variable numero y lo sumamos */
    }else {

    fecha = new Date((1000 * 60 * 60 * 24 * numero) + date.getTime()); }

  /* Mostramos por pantalla la suma de del contenido de la variable Fecha obteniendo el dia mes y año */

    alert(fecha.getDate() + "/" + (fecha.getMonth() +1 ) + "/" +fecha.getFullYear());

}


  /* --------  Funcion SorteoNavidad  --------*/
  // Creamos la funcion Navidad que nos dara el numero random de 0 al 100000
  function sorteoNavidad(){
  let numeroNavidad = Math.floor(Math.random() * 100000 );

  // Creamos una funcion que nos rellenara con 0 si el numero es de menos de 5 digitos
  function añadirCero(numeroNavidad){  while (numeroNavidad.toString().length<5)
  numeroNavidad = '0'+numeroNavidad;
  return numeroNavidad;
  }

  // Nos muestra el mensaje
  alert("El numero de Navidad Premiado es : "+añadirCero(numeroNavidad));

  }
