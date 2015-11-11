var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

router.get('/', function (req, res, next) {
    Item.find()
    .then(function(items){
    	res.send(items);
    }, next );

});

router.get('/:id', function (req, res, next) {
    Item.findById(req.params.id)
    .then(function(item) {
    	res.send(item);
    }, next)
});

router.post('/', function (req, res, next) {
	Item.create(req.body)
		.then(function (item) {
			res.status(201).json(item)
			.then(null, next);
		})
})

module.exports = router;