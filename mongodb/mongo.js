var MongoClient = require( 'mongodb' ).MongoClient;

MongoClient.connect('mongodb://localhost:27017/DB', function(err, db) {
  if (err)
    console.log(err);

    db.collection('COLECCION')
    .find()
    .toArray((err, data) => {

      if (err)
        console.log(err);

      console.log(data);
    })


});
