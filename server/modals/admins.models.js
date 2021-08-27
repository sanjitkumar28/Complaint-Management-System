const sql = require('../db.js');
const moment = require('moment');

const Admins = function (admins) {
    this.admin_name = admins.admin_name;
    this.admin_email = admins.admin_email;
    this.admin_phone = admins.admin_phone;
    this.admin_address = admins.admin_address;
    this.admin_password = admins.admin_password;
};


Admins.create = (newAdmin, result) => {
    sql.query("INSERT INTO admin SET ?", newAdmin, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newAdmin });
    });
};


Admins.login = (email, password, result) => {
    sql.query(`SELECT * FROM admin WHERE admin_email = ? AND admin_password = ?`, [email, password], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Admin found: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};


Admins.getComplaints = (result) => {

    sql.query(`SELECT * FROM complaints where admin_name = ?`,[''], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Complaints found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Admins.setComplaints = (admin_name,admin_id,complaint_id,result) => {

    sql.query(`UPDATE complaints SET admin_name = ?, admin_id = ? WHERE complaint_id = ?`,
        [admin_name,admin_id,complaint_id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res) {
            console.log("Complaints updated: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};



Admins.retcomplaints = (admin_id, result) => {

    sql.query(`(SELECT * FROM complaints WHERE admin_id = ? AND complaint_status= ?) UNION (SELECT * FROM complaints WHERE admin_id = ? AND complaint_status= ?)`, [admin_id, 'Initiated', admin_id, 'In Process'], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Admin found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Admins.retdonecomplaints = (admin_id, result) => {

    sql.query(`SELECT * FROM complaints WHERE admin_id = ? AND complaint_status= ?`, [admin_id, 'Done'], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Admin found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};


Admins.changeComplaintStatus = (status, complaint_id, result) => {

    sql.query(`UPDATE complaints SET complaint_status = ? WHERE complaint_id = ?`,
        [status, complaint_id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res) {
                console.log("Complaints updated: ", res);
                result(null, res);
                return;
            }
            result({ kind: "not_found" }, null);
        });
};




module.exports = Admins;