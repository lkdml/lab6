express = require('express');
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};



router = express.Router({mergedparams : false});//{mergedparams : false}
router.use(cors(corsOptions));

//3. Alta 
router.post('/nueva',function(req,res){
  console.log(req.body);
    req.db.collection('alumnos')
    .insert(req.body,function(e){
        if (e)
            console.log(e);
    })
    res.send("Se inserto correctamente");
});

//lista
router.get('/',function(req,res){
	req.db.collection('alumnos')
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});


router.post('/actualizar',function(req,res){
    var objetoAlumno =req.body;
    var idAlumno=objetoAlumno._id;
    delete objetoAlumno._id
	req.db.collection('alumnos')
	.update({ _id: req.ObjectID(idAlumno)},{ $set : objetoAlumno }, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

router.post('/eliminar',function(req,res){
    req.db.collection('alumnos')
    .remove({ _id: req.ObjectID(req.body._id)}, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

router.all('/buscarNotas/:nota',function(req,res){
     req.db.collection('alumnos')
    .find({notas:{$lte:parseInt(req.params.nota)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/buscar/:criterio',function(req,res){
    req.db.collection('alumnos')
    .find( { $text: { $search : req.params.criterio}} )
    .toArray((err, data) => {
        res.json(data);
    });
});


module.exports = router;
