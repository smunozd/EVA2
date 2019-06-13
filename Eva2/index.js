firebase.initializeApp({
    apiKey: 'AIzaSyCqyvlYp_VUynJ8TQOZcfQvIIBj02bgz_k',
    authDomain: 'eva2-cristian-loyola.firebaseapp.com',
    projectId: 'eva2-cristian-loyola'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

function agregarDatos(){

var Nombre=document.getElementById("Nombre").value;
var Categoria=document.getElementById("Categoria").value;
var Tipo=document.getElementById("Tipo").value;
var Plataforma=document.getElementById("Plataforma").value;
var Descripcion=document.getElementById("Descripcion").value;
var Ubicacion=document.getElementById("Ubicacion").value;
var Estado=document.getElementById("Estado").value;

  db.collection("eva2").add({
    Nombre: Nombre,
    Categoria: Categoria,
    Tipo: Tipo,
    Plataforma: Plataforma,
    Descripcion: Descripcion,
    Ubicacion: Ubicacion,
    Estado: Estado
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    var Nombre=document.getElementById("Nombre").value='';
var Categoria=document.getElementById("Categoria").value='';
var Tipo=document.getElementById("Tipo").value='';
var Plataforma=document.getElementById("Plataforma").value='';
var Descripcion=document.getElementById("Descripcion").value='';
var Ubicacion=document.getElementById("Ubicacion").value='';
var Estado=document.getElementById("Estado").value='';
location.reload();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}//fin funcion

function eliminarDatos(){
    db.collection("eva2").doc("OAgId8RkCO98R8dKaw5d").delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
} //fin funcion

function verDatos(){
       db.collection("eva2").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ",
doc.data().Nombre +" - "+ doc.data().Categoria +" - "+ doc.data().Tipo+" - "
+ doc.data().Plataforma +" - "+ doc.data().Descripcion +" - "+ doc.data().Ubicacion +
" - "+ doc.data().Estado);
                         
            })
        })}//fin funcion


var tabla=document.getElementById('tabla');
db.collection("eva2").get().then((querySnapshot) =>{
	tabla.innerHTML='';
	querySnapshot.forEach((doc) =>{
	console.log(`${doc.id} => ${doc.data().Nombre}`);
    tabla.innerHTML += `
<tr>
<th scope="row">*</th>
<td>${doc.data().Nombre}</td>
<td>${doc.data().Categoria}</td>
<td>${doc.data().Tipo}</td>
<td>${doc.data().Plataforma}</td>
<td>${doc.data().Descripcion}</td>
<td>${doc.data().Ubicacion}</td>
<td>${doc.data().Estado}</td>
</tr>
`
    });

})