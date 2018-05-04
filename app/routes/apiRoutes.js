let friendData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(request, response){
        response.json(friendData);
    });

    app.post("/api/friends",function (request, response) {
        console.log("Post API/Friends works!");
    });
}