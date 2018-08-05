var path = require ("path");

var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var newUserScore = req.body.score;
        var difference = 10000;
        var userMatch = "";
        var userMatchImage = ""
        for (var i=0; i<friends.length; i++){

                if (friends[i].score-newUserScore<difference) {
                    difference = newUserScore-friends[i].score;
                    userMatch = friends[i].name;
                    userMatchImage = friends[i].photo;
                }
        }
        friends.push(newUser);
        return res.json({
            userMatch: userMatch,
            userMatchImage: userMatchImage
            
        })
    
    });
};