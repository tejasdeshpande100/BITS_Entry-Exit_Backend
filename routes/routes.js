var express = require('express');
var router = express.Router();
const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');


const { addData, find, uploadImage, registration, addApprovalData, findApprovalData } = require('../controllers/controller');

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
router.post('/add-approval-data',addApprovalData)
router.get('/',(req,res)=>{res.json("Hello")});
router.get('/superset-verification', (req, res) => {
    const html = `
      <html>
        <head>
          <title>Superset Verification</title>
        </head>
        <body>
          <h1>Superset Verification</h1>
          <p>This is to certify that this data collection portal was created as a part of SOP under Yashwardhan Sir by TEJAS DESHPANDE (2019B3A70562P) and HARSHIT GUPTA (2019B2A70898P), and it will be used to feed data into the BITS ENTRY EXIT System for face recognition.</p>
          <p>WORK COMPLETED:</p>
          <ul>
            <li>Made an interactive GUI for the Entry/Exit system for visitors visiting BITS Pilani.</li>
            <li>Integrated the system with QR code-based entry and exit.</li>
            <li>Made a user manual guide so that anyone can easily understand the working of the system.</li>
            <li>Integrated the system with thermal printers so that visitors get a physical copy of the pass.</li>
            <li>Added functionality of extracting the details of a visitor who has already visited earlier and auto-fill it the next time just by matching the contact number.</li>
            <li>Made an executable file of the program so that it can easily be installed and run on any system.</li>
            <li>Made an admin module, where the administrator can see various reports of the visitors.</li>
            <li>Hosted the database on the server and connected both the user and admin modules with the server through the BITS intranet.</li>
            <li>Made a webpage for the data collection of students and staff members of BITS for a facial recognition-based Entry/Exit system.</li>
            <li>Made a frontal facial recognition model for the facial recognition Entry/Exit system.</li>
            <li>Made a visitor Entry/Exit approval portal where students can apply for the visit of their knowns and make their entry and exit easy after approval.</li>
          </ul>
        </body>
      </html>
    `;
    res.send(html);
  });
  
// find
router.post('/find',  find);
router.get('/find-approval-data',  findApprovalData);

router.post('/upload',upload.single('image'), uploadImage)

// images number check
router.post('/register', uploadMultiple.array('images', 5),registration);



module.exports = router;
