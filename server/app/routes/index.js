'use strict';
var router = require('express').Router();
var fs = require('fs');
var S3FS = require('s3fs');
// var s3fsImpl = new S3FS('rp-stackathon-auction', {
// 	AccessKeyId: ,
// 	secretAccessKey: 
// })

// s3fsImpl.create();

var multiparty = require('connect-multiparty');
var	multipartyMiddleware = multiparty();

// router.use(multipartyMiddleware);

// router.post('/testupload', multipartyMiddleware, function (req, res) {
// 	console.log('made it to test!');
// 	console.log(req.body, req.files);
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

router.use('/members', require('./members'));
router.use('/items', require('./api/items.router.js'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});

module.exports = router;
