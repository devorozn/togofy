const router = require('express').Router();
const passport = require('passport');
var news = require("../controllers/newscontroller.js");
var playLis = require("../controllers/playlistcontroller.js");


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/home',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/home',isAuthenticated, (req, res, next) => {
  //res.render('home');
  news.list(req, res);
});

router.get('/create',isAuthenticated, (req, res, next) => {
  news.create(req, res);
});

// Save news
router.post('/save', isAuthenticated, (req, res, next) => {
  news.save(req, res);
});

//Go edit form
router.get('/edit/:id',isAuthenticated, (req, res, next) => {
  news.edit(req, res);
});

// Update edit form
router.post('/update/:id',isAuthenticated, (req, res, next) => {
  news.update(req, res);
});

// Delete update
router.post('/delete/:id', isAuthenticated, (req, res, next) => {
  news.delete(req, res);
});

// Make news like
router.post('/like/:idUser/:idnews', isAuthenticated, (req, res, next) => {
  playLis.like(req, res);
});

// UnMake news like
router.post('/unlike/:idUser/:idnews', isAuthenticated, (req, res, next) => {
  playLis.unLike(req, res);
});

router.get('/playlist',isAuthenticated, (req, res, next) => {
  news.playList(req, res);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/signin');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

module.exports = router;
