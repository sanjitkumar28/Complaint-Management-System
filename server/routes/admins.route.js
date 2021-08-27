module.exports = app => {
    const admins = require("../controllers/admins.controller.js");

    app.post("/admins", admins.createAdmin);

    app.post("/adminslogin", admins.loginAdmin);

    app.get("/getallcomplaints", admins.retrieveAllComplaint);

    app.post("/selectcomplaint", admins.setAdminComplaint);

    app.post("/changestatus", admins.setComplaintStatus);

    app.get("/admincomplaints/:adminId", admins.retrieveComplaint);

    app.get("/admindonecomplaints/:adminId", admins.retrieveDoneComplaint);

};