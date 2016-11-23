express = require('express')
router = express.Router({mergedparams : false}); //


router.get('/',function(req,res){

    req.db.createIndex({nombre:"text",
					raza:"text",
					tipo:"text"},
					{weight:{nombre:10,
							raza:5,
							tipo:2}})
    res.send("Indices de la BD creados correctamente");
});


router.get('/:indice',function(req,res){
    req.db.find({$text:{$search:req.params.indice}}) 
    .toArray((err, data) => {
        res.json(data);
    });
});

module.exports = router;