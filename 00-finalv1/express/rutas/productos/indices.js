express = require('express')

router = express.Router(); //{mergedparams : false}


router.get('/indice',function(req,res){
	req.db.collection('productos').dropIndexes();
    req.db.createIndex({nombre:"text",
					marca:"text",
					descripcion:"text"},
					{weight:{nombre:10,
							marca:5,
							descripcion:2}})
    res.send("Indices de la BD creados correctamente");
});


router.get('/indice/:indice',function(req,res){
    req.db.find({$text:{$search:req.params.indice}}) 
    .toArray((err, data) => {
        res.json(data);
    });
});
/*
router.get('/indices',function(req,res){
      index.then(function(rta){
   		console.log(rta); 
      })
      .catch(function(e){
        console.log(e);
      });
});
*/




module.exports = router;