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
var fichero;
var storageRef;
var imagenesRef;
var database=firebase.database("eva2-cristian-loyola");

function inicializar(){
    fichero=document.getElementById("fichero");
    fichero.addEventListener("change", subirImagenAFirebase,false);

    storageRef=firebase.storage().ref();
    imagenesRef=firebase.database("eva2-cristian-loyola").ref().child("imagenes");
    mostrarImagenes();
}
function mostrarImagenes(){
imagenesRef.on("value",function(snapshot){
    var datos=snapshot.val();
    var result="";
    for(var key in datos){
        result += '<img width="200" class="img-thumbnail" scr="'+datos[key].url+'"/>';
    }
    document.getElementById("imagenes-de-firebase").innerHTML=result;
})
}


function subirImagenAFirebase(){
    var imagenASubir=fichero.files[0];

    var uploadTask=storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

    document.getElementById("progreso").className="";

    uploadTask.on('state_changed',
    function(snapshot){
        var barraProgreso=(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("barra-de-progreso").style.width = barraProgreso + "%";
//progreso
    }, function(error){
alert("Error al Subir Imagen");
    }, function(){

        var downloadURL=uploadTask.snapshot.downloadURL;
        crearNodoEnBDFirebase(imagenASubir.name, downloadURL);
        document.getElementById("progreso").className="hidden";
    });
}

function crearNodoEnBDFirebase(nombreImagen, url){
imagenesRef.push({nombre:nombreImagen, url: downloadURL});
}