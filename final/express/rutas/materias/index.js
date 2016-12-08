express = require('express');
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
};



router = express.Router({mergedparams : false});
router.use(cors(corsOptions));

//3. Alta 
router.post('/nueva',function(req,res){
  console.log(req.body);
    req.db.collection('materia')
    .insert(req.body,function(e){
        if (e)
            console.log(e);
    })
    res.send("Se inserto correctamente");
});

//lista
router.get('/',function(req,res){
	req.db.collection('materia')
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});


router.post('/actualizar',function(req,res){
    var objetoMateria =req.body;
    var idMateria=objetoMateria._id;
    delete objetoMateria._id
	req.db.collection('materia')
	.update({ _id: req.ObjectID(idMateria)},{ $set : objetoMateria }, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

router.post('/eliminar',function(req,res){
    req.db.collection('materia')
    .remove({ _id: req.ObjectID(req.body._id)}, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});


router.get('/buscar/:criterio',function(req,res){
    req.db.collection('materia')
    .find( { $text: { $search : req.params.criterio}} )
    .toArray((err, data) => {
        res.json(data);
    });
});


module.exports = router;
