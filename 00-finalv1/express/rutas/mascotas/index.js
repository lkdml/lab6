express = require('express');
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};



router = express.Router({mergedparams : false});//{mergedparams : false}
router.use(cors(corsOptions));

//3. Alta de una mascota
router.post('/nueva',function(req,res){
  console.log(req.body);
    req.db.collection('mascotas')
    .insert(req.body,function(e){
        if (e)
            console.log(e);
    })
    res.send("Se inserto correctamente");
});



//4.a listo todas las mascotas
router.get('/',function(req,res){
	req.db.collection('mascotas')
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.b listo todas las mascotas de una raza especìfica
router.get('/:raza',function(req,res){
    console.log(req.params.raza);
	    req.db.collection('mascotas')
    .find({raza:req.params.raza})
    .toArray((err, data) => {
        res.json(data);
    });
});


//4.c Las mascotas mayores a la edad especificada
router.all('/mayor/:edad', function(req,res){
    req.db.collection('mascotas')
    .find({edad:{$gte:(req.params.edad)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.d listo los perros con menor peso al indicado
router.all('/perros/menor/:peso',function(req,res){
     req.db.collection('mascotas')
    .find({peso:{$lte:parseInt(req.params.peso)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.e Listo todas las mascotas del dueño
router.get('/duenio/:nombre',function(req,res){
		req.db.collection('mascotas')
	.aggregate( [ { $match : { "duenio.nombre" : req.params.nombre }
				} ] )

    .toArray((err, data) => {
        res.json(data);
    });
});

//i. la descarga del archivo
router.get('/perros', function(req,res){
	res.download('perros.pdf','perros.pdf')
});

router.post('/actualizar',function(req,res){
    var objetoMascota =req.body;
    var idMascota=objetoMascota._id;
    delete objetoMascota._id
	req.db.collection('mascotas')
	.update({ _id: req.ObjectID(idMascota)},{ $set : objetoMascota }, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

router.post('/eliminar',function(req,res){
    req.db.collection('mascotas')
    .remove({ _id: req.ObjectID(req.body._id)}, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});


module.exports = router;
