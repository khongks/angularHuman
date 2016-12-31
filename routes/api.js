var express = require('express');
var router = express.Router();
var Model = require('../models/human')

router.get('/humans', function(req, res) {
    //response.render('index.html');
    Model.find({}, function(err, resources){
        if(err) { res.send(err).status(501);}
        else {
            res.json(resources).status(200);
        }
    });
});

router.get('/humans/:id', function(req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    Model.find({_id: id}, function(err, resource) {
        if(err) { res.send(err).status(501); }
        else {
            res.json(resource).status(200);
        }
    });
});

router.post('/humans', function(req, res) {
    var human = new Model(req.body);
    human.save(function(err, resource){
        if(err) { res.send(err).status(501); } 
        else {
            res.json(resource).status(201);
        }
    });
});

router.delete('/humans/:id', function(req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    Model.remove({_id: id}, function(err, resource){
        if(err) { res.send(err).status(501); }
        else {
            res.json(resource).status(200);
        }
    });
});


module.exports = router;