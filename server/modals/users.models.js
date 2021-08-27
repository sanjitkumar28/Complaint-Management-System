const sql = require('../db.js');
const moment=require('moment');

const Users = function (users) {
    this.user_name = users.user_name;
    this.user_email = users.user_email;
    this.user_phone = users.user_phone;
    this.user_address = users.user_address;
    this.user_password = users.user_password;
};


Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newUser });
    });
};


Users.login=(email,password,result) =>{
    sql.query(`SELECT * FROM users WHERE user_email = ? AND user_password = ?`,[email,password],(err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

    if(res.length) {
        console.log("User found: ", res[0]);
        result(null, res[0]);
        return;
    }

    result({ kind: "not_found" }, null);
});
};


Users.complaints=(user_id,name,email,phone,category,subject,result) =>{
   
    var m= moment().format('YYYY-MM-DD')

    sql.query('INSERT INTO complaints (`user_id`, `user_name`,`user_phone`,`user_email`,`admin_name`,`complaint_status`, `subject`, `category`,`complaint_date`,`admin_id`) VALUES (?,?,?,?,?,?,?,?,?,?)', [user_id, name, phone, email, '', 'Initiated', subject, category,m,null],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId });
});
};

Users.rcomplaints=(user_id,result) =>{

    sql.query(`SELECT * FROM complaints WHERE user_id = ?`,[user_id],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("User found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
});
};

Users.rfeedback=(user_id,result) =>{

    sql.query(`SELECT * FROM complaints c WHERE user_id = ? AND c.complaint_id NOT IN(SELECT complaint_id FROM feedback)`,[user_id],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("User found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
});
};


Users.retrecep=(result) =>{

    sql.query(`CALL getAllReceipts(?)`,[true],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Receipt found: ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
});
};


Users.createFeedback=(compId,feedback,result) =>{

    var m = moment().format('YYYY-MM-DD')

    sql.query('INSERT INTO feedback (`complaint_id`, `feedback`, `feedback_date`) VALUES (?,?,?)', [compId,feedback,m], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        sql.query(`select c.user_id,c.user_name,c.admin_name,c.admin_id,f.feedback_id,f.feedback from complaints c, feedback f where c.complaint_id=? and f.complaint_id=?`, [compId,compId], (err, res) => {
            if (err) {
                console.log("error: ", err);
                
            }

            if (res.length) {

                sql.query('INSERT INTO receipt (`complaint_id`, `user_id`, `admin_id`,`feedback_id`,`receipt_date`,`user_name`,`feedback_value`,`admin_name`) VALUES (?,?,?,?,?,?,?,?)', [compId, res[0].user_id, res[0].admin_id, res[0].feedback_id, m, res[0].user_name, feedback, res[0].admin_name], (err, resp) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    result(null, { id: res.insertId });
                    
                });

                

            }
        });
    

    });
}

module.exports = Users;