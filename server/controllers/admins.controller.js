const Admins = require('../modals/admins.models.js')
const md5 = require('md5');

module.exports = {

    createAdmin: async (req, res, next) => {

        var hash_pwd = md5(req.body.admin_password)

        const admins = new Admins({
            admin_name: req.body.admin_name,
            admin_email: req.body.admin_email,
            admin_phone: req.body.admin_phone,
            admin_address: req.body.admin_address,
            admin_password: hash_pwd
        });

        Admins.create(admins, (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the User"
                })
            else res.send(data);
        });


    },

    loginAdmin: async (req, res, next) => {

        var hash_pwd = md5(req.body.admin_password)

        var email = req.body.admin_email

        Admins.login(email, hash_pwd, (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: err.message || "Some error occurred while authentication"
                })
            }
            else res.send(data);
        });
    },


    retrieveAllComplaint: async (req, res, next) => {

        Admins.getComplaints((err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: err.message || "Some error occurred while searching all complaints"
                })
            }
            else res.send(data);
        });
    },

    setAdminComplaint: async (req, res, next) => {
        
        Admins.setComplaints(req.body.admin_name, req.body.admin_id, req.body.complaint_id,(err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: err.message || "Some error occurred while updating complaint"
                })
            }
            else res.send(data);
        });
    },


    setComplaintStatus: async (req, res, next) => {
        
        
        Admins.changeComplaintStatus(req.body.status,req.body.complaint_id,(err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: err.message || "Some error occurred while updating complaint"
                })
            }
            else res.send(data);
        });
    },


    retrieveComplaint: async (req, res, next) => {

    var id = req.params.adminId

    Admins.retcomplaints(id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching complaint"
            })
        }
        else res.send(data);
    });
    },


    retrieveDoneComplaint: async (req, res, next) => {

    var id = req.params.adminId

    Admins.retdonecomplaints(id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching complaint"
            })
        }
        else res.send(data);
    });
    }
    
}