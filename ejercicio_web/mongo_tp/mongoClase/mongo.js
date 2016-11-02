//con mongod levanto el servidor
// en la consola escribo mongo

//para importar la base de datos, en la carpeta bin de mongo abro una consola y pongo
// mongoimport --db NombreBase --collection NombreColeccion --jsonArray --file ruta del archivo


/*

Ejercicios

1. Cargar el archivo personas.json en la coleccion
personas.

mongoimport --db NombreBase --collection NombreColeccion --jsonArray --file ruta del archivo
use claseMongo (nombre bd)


2. Listar todos los documentos de la colección.

db.personas.find().pretty()

3. Obtener la cantidad documentos de la colección.
db.personas.count()
o
db.personas.find().count()

4. Obtener todos los usuarios de sexo femenino.
db.personas.find({"gender": "female"}).pretty()

5. Obtener el mail de los usuarios de sexo masculino.
db.personas.find({"gender": "male"},{"email":1}).pretty()

6. Obtener todos los datos de los usuarios
activos(isActive: true).
db.personas.find({"isActive": true}).pretty()

7. Obtener el nombre, mail, dirección y amigos de los
usuarios activos(isActive: true) de sexo masculino.
db.personas.find({"gender": "male","isActive": true},{"name":1,"address":1,"email":1,"friends":1}).pretty()

8. Obtener el nombre y la edad del hombre más
grande.
9. Obtener el nombre y el balance de lo usuarios que
estén entre $2800 y $3500, ordenado de mayor a
menor.
10. Obtener los hombres mayores a 30 años y
menores a 38.
11. Obtener todos los usuarios mujeres y los
hombres de 24 años. 
12. Obtener los usuarios que tengan la etiqueta(tags)
“cillum”.
13. Obtener la cantidad de usuarios que tengan la
etiqueta(tags) “cillum”.
14. Obtener el usuario que tenga un amigo llamado
"Mabel Orr".
15. Borrar los usuarios inactivos.
16. Borrar la coleccion personas. 


*/

var MongoClient = require( 'mongodb' ).MongoClient;
function Callback(err, data) {

      if (err)
        console.log(err);

      console.log(data);
    };

MongoClient.connect('mongodb://localhost:27017/claseMongo', function(err, db) {
  if (err)
    console.log(err);

//2. Listar todos los documentos de la colección.

/*
    db.collection('personas')
    .find()
    .toArray((err, data) => {

      if (err)
        console.log(err);

      console.log(data);
    })
*/

//3. Obtener la cantidad documentos de la colección.
    db.collection('personas')
    .find()
    .count(Callback)

//4. Obtener todos los usuarios de sexo femenino.
//db.personas.find({"gender": "female"}).pretty()
	db.collection('personas')
    .find({"gender": "female"})
    .toArray(Callback)
  
//5. Obtener el mail de los usuarios de sexo masculino. 
//db.personas.find({"gender": "male"},{"email":1}).pretty()
	db.collection('personas')
    .find({"gender": "male"},{"email":1})
    .toArray(Callback)

//6. Obtener todos los datos de los usuarios activos(isActive: true).
	db.collection('personas')
    .find({"isActive": true})
    .toArray(Callback)
 
//7. Obtener el nombre, mail, dirección y amigos de los usuarios activos(isActive: true) de sexo masculino.
db.collection('personas')
    .find({"gender": "male","isActive": true},{"name":1,"address":1,"email":1,"friends":1})
    .toArray(Callback)

 
//8. Obtener el nombre y la edad del hombre más grande.
db.collection('personas')
    .find({"gender":"male"},{"name":1,"age":1})
    .sort({"age":-1})
    .limit(1)
    .toArray(Callback)
   
//9. Obtener el nombre y el balance de lo usuarios que estén entre $2800 y $3500, ordenado de mayor a menor.
db.collection('personas')
    .find({"latitude":{$gte:-70,$lte:1}},{"name":1,"balance":1})
    .sort({"balance":-1})
    .toArray(Callback)
 
//10. Obtener los hombres mayores a 30 años y menores a 38.
db.collection('personas')
    .find({"gender":"male","age":{$gte:30,$lte:38}},{"name":1,"age":1})
    .sort({"age":-1})
    .toArray(Callback)
 

//11. Obtener todos los usuarios mujeres y los hombres de 24 años. 
db.collection('personas')
    .find({"age":{$eq:24}},{"name":1,"age":1})
    .sort({"age":-1})
    .toArray(Callback)
 
//12. Obtener los usuarios que tengan la etiqueta(tags) “cillum”.
db.collection('personas')
    .find({"tags":{$in:["cillum"]}},{"name":1,"tags":1})
    .toArray(Callback)


//13. Obtener la cantidad de usuarios que tengan la etiqueta(tags) “cillum”.
db.collection('personas')
    .find({"tags":{$in:["cillum"]}},{"name":1,"tags":1})
    .count(Callback)


//14. Obtener el usuario que tenga un amigo llamado "Mabel Orr".
db.collection('personas')
    .find({"friends.name":{$in:["Mabel Orr"]}},{"name":1,"friends":1})
    .toArray(Callback)

//15. Borrar los usuarios inactivos.
db.collection('personas')
    .remove({"isActive":false})

//16. Borrar la coleccion personas.
//db.collection('personas').drop()  
 
});
