var mongoose = require("mongoose");

const User = require('../models/user');
var playListController = {};

 // Update news
 playListController.like = function(req, res) {
    console.log("user Id");
    console.log(req.params.idUser);
    User.findByIdAndUpdate(req.params.idUser
                    ,{ $push: 
                        { playlist: 
                            {
                              id: req.params.idnews
                             ,date: Date.now()
                            }
                        }
                    }, { new: true }
                     , function (err, newtrx) {
    if (err) {
        console.log(err);
        res.redirect("/home");
    }
    res.redirect("/home");
    });
};

 // Update news
 playListController.unLike = function(req, res) {
    console.log("user Id");
    console.log(req.params.idUser);
    User.findByIdAndUpdate(req.params.idUser
                    ,{ $pull: 
                        { playlist: 
                            {
                              id: req.params.idnews 
                            }
                        }
                    }, { new: true }
                     , function (err, newtrx) {
    if (err) {
        console.log(err);
        res.redirect("/home");
    }
    res.redirect("/home");
    });
};



module.exports = playListController;  