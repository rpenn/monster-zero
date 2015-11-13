var router = require('express').Router();
var fs = require('fs');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var fs = require('fs');
var S3FS = require('s3fs');
// var s3fsImpl = new S3FS('rp-stackathon-auction', {
//  AccessKeyId: ,
//  secretAccessKey: 
// })

// s3fsImpl.create();

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

// router.use(multipartyMiddleware);

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
	req.body.timeStart = Date.now();
    req.body.timeEnd = req.body.timeStart + (1000 * 60 * 60 * 24); //milliseconds, seconds, minutes, hours
    console.log(req.body);
    Item.create(req.body)
		.then(function (item) {
			res.status(201).json(item)
			.then(null, next);
		})
});

// router.post('/testupload', function (req, res) {
//     console.log(req);
//     var file = req.files.file;
//     var stream = fs.createReadStream(file.path);
//     return s3fsImpl.writeFile(file.originalFilename, stream)
//         .then(function() {
//             fs.unlink(file.path, function(err) {
//                 if(err)
//                     console.error(err);
//             })
//             res.redirect('/add');
//         })
// });

module.exports = router;