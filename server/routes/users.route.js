module.exports = app => {
    const users = require("../controllers/users.controller.js");

    app.post("/users", users.createUser);

    app.post("/userslogin", users.loginUser);

    app.post("/createcomplaint", users.createComplaint);

    app.get("/complaints/:userId", users.retrieveComplaint);

    app.get("/receipts", users.retrieveReceipt);
    
    app.get("/feedbacks/:userId", users.retrieveFeedback);

    app.post("/feedback", users.creatFeedback);

};