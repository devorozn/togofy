var mongoose = require("mongoose");
const News = require('../models/news');

var newsController = {};


    // Create new
    newsController.create = function(req, res) {
        res.render("../views/news/create");
    };

  // Save/add new
  newsController.save = function(req, res) {
    var news = new News(req.body);
  
    news.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/news/create");
      } else {
        console.log("Successfully created an employee.");
        //res.redirect("/employees/show/"+employee._id);
        newsController.list(req, res);
      }
    });
  };

   // List news
   newsController.list = function(req, res) {
    var sort = { length: 1, dateCreate: -1 };   
    News.find({}).sort(sort).exec(function (err, news) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("home", {news: news});
        }
        });
    }; 

    // Edit new
    newsController.edit = function(req, res) {
        News.findOne({_id: req.params.id}).exec(function (err, news) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/news/edit", {news: news});
        }
        });
    };

    // Update news
    newsController.update = function(req, res) {
        News.findByIdAndUpdate(req.params.id
                        ,{ $set: 
                            { title: req.body.title
                             ,body: req.body.body
                             ,dateUpdate: Date.now()
                            }
                        }, { new: true }
                         , function (err, newtrx) {
        if (err) {
            console.log(err);
            res.render("../views/news/edit", {newtrx: req.body});
        }
        res.redirect("/home");
        //newsController.list(req, res);
        });
    };    

    // Delete news
    newsController.delete = function(req, res) {
        News.remove({_id: req.params.id}, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("New deleted!");
            res.redirect("/home");
        }
        });
    };

       // List news
   newsController.playList = function(req, res) {
    var sort = { length: 1, dateCreate: -1 };   
    News.find({}).sort(sort).exec(function (err, news) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/news/playlist", {news: news});
        }
        });
    }; 


  module.exports = newsController;  