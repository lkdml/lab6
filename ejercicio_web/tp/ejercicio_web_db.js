
var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var ej = express();


MongoClient.connect('mongodb://localhost:27017/ejercicio_web', function(err, db) {
      if (err)
        console.log(err);

        ej.use((req,res,next)=>{
            req.db = db.collection('articulos');
            next();
        });

        app.listen(3000,function(){
        console.log('app running');
});

});



