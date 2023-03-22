var express = require('express');
var router = express.Router();
const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');


const { addData, find, uploadImage, registration } = require('../controllers/controller');

var storage = multer.diskStorage(
    {
        destination: './public/images/',
        filename: function ( req, file, cb ) {
            
            cb( null, file.originalname );
        }
    }
);

var storageMultiple = multer.diskStorage(
    {
        destination: './public/studentImages/',
        filename: function ( req, file, cb ) {
            
            cb( null, req.body.id + '#' + uuidv4() + '#' + file.originalname );       

        }
    }
);


var upload = multer( { storage: storage } );
var uploadMultiple = multer( { storage: storageMultiple } );

// add or update
router.post('/add-data',  addData);
router.get('/',(req,res)=>{res.json("Hello")});
// find
router.post('/find',  find);

router.post('/upload',upload.single('image'), uploadImage)

// images number check
router.post('/register', uploadMultiple.array('images', 5),registration);



module.exports = router;
