express = require('express');
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
router = express.Router({mergedparams : false}); //


router.get('/', cors(corsOptions),function(req,res){

    req.db.collection('mascotas').createIndex({nombre:"text",
					raza:"text",
					tipo:"text"},
					{weight:{nombre:10,
							raza:5,
							tipo:2}})
    res.send("Indices de la BD creados correctamente");
});


router.get('/:indice', cors(corsOptions),function(req,res){
    req.db.collection('mascotas').find({$text:{$search:req.params.indice}}) 
    .toArray((err, data) => {
        res.json(data);
    });
});

module.exports = router;