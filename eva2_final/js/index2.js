firebase.initializeApp({
    apiKey: 'AIzaSyCqyvlYp_VUynJ8TQOZcfQvIIBj02bgz_k',
    authDomain: 'eva2-cristian-loyola.firebaseapp.com',
    projectId: 'eva2-cristian-loyola'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

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
  <td><button class="btn-floating btn-large red pulse" onclick="eliminar('${doc.id}')">Eliminar</button></td>
  <td><button class="btn-floating btn-large yellow" onclick="editar('${doc.id}','${doc.data().Nombre}','${doc.data().Categoria}','${doc.data().Tipo}','${doc.data().Plataforma}','${doc.data().Descripcion}','${doc.data().Ubicacion}','${doc.data().Estado}')">Editar</i></button></td>
  </tr>
  `
      });
    });
function verFondos(){
    window.location.href="fondos.html";  
}

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

function eliminar(id){
    if (window.confirm("Desea eliminar el registro?") == true)
    {
    db.collection("eva2").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });}
    else
    {
       alert("Cancelado");
      
    }
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
 


function editar(id,Nombre,Categoria,Tipo,Plataforma,Descripcion,Ubicacion,Estado){
    document.getElementById('Nombre').value= Nombre;
    document.getElementById('Categoria').value= Categoria;
    document.getElementById('Tipo').value= Tipo;
    document.getElementById('Plataforma').value= Plataforma;
    document.getElementById('Descripcion').value= Descripcion;
    document.getElementById('Ubicacion').value= Ubicacion;
    document.getElementById('Estado').value= Estado;
    var boton= document.getElementById('botonSave');
    boton.innerHTML='Editar';

    boton.onclick = function(){


    var washingtonRef = db.collection("eva2").doc(id);

var Nombre=document.getElementById("Nombre").value;
var Categoria=document.getElementById("Categoria").value;
var Tipo=document.getElementById("Tipo").value;
var Plataforma=document.getElementById("Plataforma").value;
var Descripcion=document.getElementById("Descripcion").value;
var Ubicacion=document.getElementById("Ubicacion").value;
var Estado=document.getElementById("Estado").value;

return washingtonRef.update({
    Nombre: Nombre,
    Categoria: Categoria,
    Tipo: Tipo,
    Plataforma: Plataforma,
    Descripcion: Descripcion,
    Ubicacion: Ubicacion,
    Estado: Estado
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML='Guardar Datos';
    location.reload();
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}


}