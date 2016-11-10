var express = require('express');
var router = express.Router();//{mergeParams:true}

router.get('/users', (req, res, next) => {

    req.db
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});
router.get('/user/:id', (req, res, next) => {
    
    req.db
    .find({_id:req.params.id})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.post('/user', (req, res, next) => {
    
    req.db
    .find({_id:req.body.id})
    .toArray((err, data) => {
        res.json(data);
    });
});
module.exports = router;