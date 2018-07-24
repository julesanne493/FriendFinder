var path = require("path");

var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    var userInput = req.body;

    var userScore = userInput.score;

    var friendMatch = "";
    var friendMatchPhoto = "";
    var difference = 10000;
        for (var i = 0; i<friends.length; i++) {
            var scoreDiff = 0;
            for (var i=0; i<userScore.length; i++){
                scoreDiff += Math.abs(friends[i].scores[i] - userScore[i]);
            }

            if (scoreDiff < difference){
                difference = scoreDiff;
                friendMatch = friends[i].name;
                friendMatchPhoto = friends[i].photol
            }
        }
    

}

