
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqyvlYp_VUynJ8TQOZcfQvIIBj02bgz_k",
    authDomain: "eva2-cristian-loyola.firebaseapp.com",
    databaseURL: "https://eva2-cristian-loyola.firebaseio.com",
    storageBucket: "eva2-cristian-loyola.appspot.com",
    messagingSenderId: "184632134234",
    appId: "1:184632134234:web:524a253b2247ebdb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.onload = inicializar();
var formAutenticacion;

function inicializar(){
formAutenticacion = document.getElementById("form-autenticacion");
formAutenticacion.addEventListener("submit",autentificar, false);
}

function autentificar(event){
    event.preventDefault();
    var usuario= event.target.email.value;
    var contrasena= event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
.then(function(result){
alert("Combinacion Usuario/Password Valido");
window.location.href="index2.html";
})
.catch(function(error) {
alert("Combinacion Usuario/Password Incorrecto");
});

}