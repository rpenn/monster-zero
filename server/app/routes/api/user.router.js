var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find()
    .then(function(items){
    	res.send(items);
    }, next );

});