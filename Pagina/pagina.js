var completado = false; 

 function validarLongitudNombre() {
    var nombre;
    nombre = document.getElementById("nombre").value.trim();
    if(nombre.length === 0 ){
      alert("Debe llenar este campo")
      completado = false;
    }
    else{
      completado=true;
    }
    if (nombre.length == 25){
    alert("Solo puede digitar maximo 20 caracteres");}
  }

  function validarLongitudApellido() {
    var apellido;
    apellido = document.getElementById("apellido").value.trim();
    if(apellido.length === 0 ){
      alert("Debe llenar este campo")
      completado = false;
    }
    else{
      completado=true;
    }
    if (apellido.length == 25){
    alert("Solo puede digitar 25 caracteres");}
}

function validarDireccion() {

var direccion = document.getElementById('direccion').value.toLowerCase().trim();
if(direccion.length === 0 ){
  alert("Debe llenar este campo")
  completado = false;
}
else{
  completado=true;
}
if (direccion.startsWith('cll') || direccion.startsWith('cra') || direccion.startsWith('av') || direccion.startsWith('anv') || direccion.startsWith('trans')) {
completado=true;
} else {
  alert("Direccion No Valida");
  completado=true;
}

}

function validarMinLongitudUsr() {
var ccusuario;
ccusuario = document.getElementById("ccusuario").value.trim();
if(ccusuario.length === 0 ){
  alert("Debe llenar este campo")
  completado = false;
}
else{
  completado=true;
}
if (ccusuario.length < 10){
  alert("Debe digitar minimo 10 caracteres");
  completado=false;
}
else{
  completado=true;
}
}

function validarUsr(){
  var ccusuario;
  var regex = /^[a-zA-Z0-9]*$/;
  ccusuario = document.getElementById("ccusuario").value.trim();
  if(ccusuario.length === 0 ){
    alert("Debe llenar este campo")
    completado = false;
  }
  else{
    completado=true;
  }
  if (ccusuario.length == 20){
    alert("Solo puede digitar maximo 20 caracteres");
  }
  if (!regex.test(ccusuario)) {
    alert("No se pueden digitar caracteres especiales");
    completado=false;
  }
}

function validarPaswd() {
  var ccpaswd;
  var regexMayuscula = /[A-Z]/; 
  var regexNumero = /[0-9]/; 
  var regexEspeciales = /[#%&/_-]/;
ccpaswd = document.getElementById("ccpaswd").value;
if(ccpaswd.length === 0 ){
  alert("Debe llenar este campo")
  completado = false;
}
else{
  completado=true;
}
if (ccpaswd.length < 15){
  alert("Debe digitar minimo 15 caracteres");
  completado=false;
}
if ( regexMayuscula.test(ccpaswd) && regexNumero.test(ccpaswd) && regexEspeciales.test(ccpaswd)) {
  completado=true;  
} else {
  alert("La contraseña debe contener mayúsculas , numeros, letras y/o los siguientes caracteres [#,%,/,&,_,-]")
  completado=false;
}
}

function validarMaxPaswd(){
  var ccpaswd;
  ccpaswd = document.getElementById("ccpaswd").value;
  if (ccpaswd.length == 20){
    alert("Solo puede digitar maximo 20 caracteres");
  }

}

function validarEmail(){
  var email;
  email = document.getElementById("email").value.trim();
  if(email.length === 0 ){
    alert("Debe llenar este campo")
    completado = false;
  }
  else{
    completado=true;
  }
  if(email.length == 120 ){
    alert("Solo puede digitar maximo 120 caracteres");
  }
}

function verificarTelefono(){}


