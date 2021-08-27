const Users = require('../modals/users.models.js')
const md5 = require('md5');

module.exports = {

    createUser: async (req, res, next) => {
        
        var hash_pwd = md5(req.body.user_password)

        const users = new Users({
            user_name : req.body.user_name,
            user_email : req.body.user_email,
            user_phone : req.body.user_phone,
            user_address : req.body.user_address,
            user_password : hash_pwd
        });

        Users.create(users,(err,data) => {
            if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User"
            })
            else res.send(data);
        });


    },

    loginUser: async (req, res, next) => {
        
        var hash_pwd = md5(req.body.user_password)

        var email =  req.body.user_email

        Users.login(email,hash_pwd,(err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while authentication"
            })}
            else res.send(data);
        });
    },

    createComplaint: async (req, res, next) => {               
        var email =  req.body.user_email
        var name= req.body.user_name
        var phone = req.body.user_phone
        var id = req.body.user_id
        var category = req.body.category
        var subject = req.body.subject

        Users.complaints(id,name,email,phone,category,subject,(err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating complaint"
            })}
            else res.send(data);
        });
    },

    creatFeedback: async (req, res, next) => {               
        var compId =  req.body.complaint_id
        var feedback= req.body.feedback

        Users.createFeedback(compId,feedback,(err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating feedback"
            })}
            else res.send(data);
        });
    },

    retrieveComplaint: async (req, res, next) => {

        var id = req.params.userId

        Users.rcomplaints(id,(err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching complaint"
            })}
            else res.send(data);
        });
    },

    retrieveReceipt: async (req, res, next) => {

        Users.retrecep((err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching receipts"
            })}
            else res.send(data);
        });
    },

    retrieveFeedback: async (req, res, next) => {

        var id = req.params.userId

        Users.rfeedback(id,(err,data) => {
            if(err){
                console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching complaint"
            })}
            else res.send(data);
        });
    }

}