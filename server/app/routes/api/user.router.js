var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find()
    .then(function(users){
    	res.send(users);
    }, next );

});

router.get('/:id', function (req, res, next) {
    User.findById(req.params.id)
    .then(function(user) {
    	res.send(user);
    }, next)
});