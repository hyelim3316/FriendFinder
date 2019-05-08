var friendsList = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });
    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        for (var i = 0; i < friendsList.length ; i++){
            friendsList[i].scores
            for (var j = 0; j < 10; j++){
                var difference = friendsList[i].scores[j]-req.body.score[j]
            }
        }
        
        
        
        // friendData.push(req.body);
        res.json({
            name : 'Ant'
        });
    });
};