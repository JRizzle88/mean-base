var Thing = require('./models/thing');  // load the thing mongoose model - change as needed
var User = require('./models/user');  // load the User mongoose model for passport.js authentication

module.exports = function(app, passport) {
	// api ---------------------------------------------------------------------
	// create thing
	app.post('/api/things', function(req, res) {
		Thing.create({
	//		question : req.body.question,
	//		answers : req.body.answers,
	//		author : req.body.author
}, function(err, thing) {
			if (err) {
				res.send(err);
			}
			res.json(thing);
		});
	});

	// get all things
	app.get('/api/things', function(req, res) {
		// use mongoose to get all polls from the db
		Thing.find(function(err, things) {
			// if err, send it
			if (err) {
				res.send(err);
			}
			res.json(things);
		});
	});

	// get thing by username
	app.get('/api/things/:username', function(req, res) {
			// use mongoose to get all polls from the db
			Thing.find({ author : req.params.username }, function(err, things) {
				// if err, send it
				if (err) {
					res.send(err);
				}
				res.json(things);
			});
	});

	// get thing by id
	app.get('/api/thing/:id', function(req, res) {
		// use mongoose to find the thing by id requested
		Thing.findById(req.params.id, function(err, thing) {
			if(err) {
				res.send(err);
			}
			res.json(thing);
		});
	});

	// update a thing
	app.post('/api/things/:id', function(req, res) {
		Thing.findById(req.body._id, function(err, thing) {
			if(err) {
				res.send(err);
			}
		//	poll.answers = req.body.answers;
		//	poll.votes = req.body.votes;
		//	poll.save(function (err) {
				if (err) {
					res.send(err);
				}
				res.json(thing);
			});
		});
	});

	// delete a thing
	app.delete('/api/things/:id', function(req, res) {
		Thing.remove({
			_id : req.params.id
		},
		function(err, thing) {
			if (err) {
				res.send(err);
			}
			res.send();
		});
	});

	// process the login form
	// Express Route with passport authentication and custom callback
	app.post('/api/login', function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (user === false) {
				res.status(401).send(req.flash('loginMessage'));
			} else {
				req.login(user, function(err) {
					if (err) {
						res.status(500).send("There has been an error");
					} else {
						res.status(200).send("success!");
					}
				});
			}
		})(req, res, next);
	});

	// process the signup form
	// Express Route with passport authentication and custom callback
	app.post('/api/signup', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (user === false) {
				res.status(401).send(req.flash('signupMessage'));
			} else {
				res.status(200).send("success!");
			}
		})(req, res, next);
	});

	app.get('/loggedin', function(req, res) {
		var user = {};
		if (req.isAuthenticated()) {
			user.isLoggedIn = true;
			user.email = req.user.local.email;
		}
		else {
			user.isLoggedIn = false;
			user.email = undefined;
		}
		res.json(user);
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};
