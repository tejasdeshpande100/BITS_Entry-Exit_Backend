// change as per new docs
const mongoose = require('mongoose');

const User = require('../models/userModel');
const Approval = require('../models/approvalModel');
const UserRegistration = require('../models/userRegistrationModel');


exports.addData = (req, res, next) => {

   
    const id = req.body.id;

    try{
        User.update({id: id}, req.body, {upsert: true, setDefaultsOnInsert: true}, function(){
            console.log("Data inserted")  // Success
        })
    }
    catch(error){
        console.log(error)      // Failure
        res.status(500).json({
            message:"Error in insertion",
            error
        })
    }


    User.find({}).then(function(users){
        console.log(users)
    })

    res.status(200).json({
        message:"Inserted Successfully"
    })

};

exports.addApprovalData = (req, res, next) => {

    const approval = new Approval(req.body); // Create a new instance of the Approval model with the req.body data
    approval.save((err, result) => { // Save the instance to the database
      if (err) {
        console.error(err); // Handle any errors that occur during the save process
        res.status(500).send(err);
      } else {
        res.status(200).send(result); // Send the saved instance back to the client
      }
    });

};


exports.find = (req, res, next) => {

    console.log(req.body);
    User.find(req.body,(err,docs)=>{

        if(err){
            res.status(500).json({
                message:"Error in finding",
                err
            })
        }

        if(docs.length){
            res.status(200).json({
                message:"Found Successfully",
                docs
            })
        }else{
            res.status(404).json({
                message:"Not Found"
            })
        }
       
    });
    
    
}

exports.findApprovalData = (req, res, next) => {

   
    Approval.find({},(err,docs)=>{

        if(err){
            res.status(500).json({
                message:"Error in finding",
                err
            })
        }

        if(docs.length){
            res.status(200).json({
                message:"Found Successfully",
                docs
            })
        }else{
            res.status(404).json({
                message:"Not Found"
            })
        }
       
    });
    
    
}


exports.uploadImage = (req, res, next) => {
    res.status(200).json({
        message:"Uploaded Successfully"
    })
}


exports.registration = (req, res, next) => {
    console.log(req.data)
    if('errorMessage' in req){
        return res.status(400).json({
            message:req.errorMessage
        })
    }

    console.log('body',req.body)


    let student = new UserRegistration({
        id: req.body.id,
        name: req.body.name
    })

    var err = student.validateSync();

    if(err){
        return res.status(400).json({
            message:"Object validation failed"
        })
    }else{
        //Mongo store
        try{
            UserRegistration.update({id: req.body.id}, student, {upsert: true, setDefaultsOnInsert: true}, function(){
                console.log("Data inserted")  // Success
            })
        }
        catch(error){
            console.log(error)      // Failure
            res.status(500).json({
                message:"Error in insertion",
                error
            })
        }
    }

    

    res.status(200).json({
        message:"Uploaded Successfully"
    })
}
