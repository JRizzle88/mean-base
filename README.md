# Boilerplate
Welcome to my Starter Boilerplate

## App tree
```
Boilerplate
-app
--models
---thing.js (can be changed to whatever object you need to save to DB)
---user.js (used for authentication with Passport.js. It uses email+password)
--routes.js (all the epxress routing: api calls for creating, deleting, updating, retrieving Things and managing signup, login, lougout and check loggedin status)
-config
--database.js (mongodb URI)
--passport.js (all the Passport.js authentication code)
-public
--css
---stylesheet.css
--img
--js
---controllers
----HomeController.js (angular controller for the Home view)
----IndexController.js (angular controller for the main Index view)
----LoginController.js (angular controller for the Login view)
----SignupController.js (angular controller for the Signup view)
---app.js (angular routing and service for the User global object)
--views
---home.html (Home view)
---login.html (Login view)
---signup (Signup view)
--index.html (Main Index view)
-package.json
-Procfile (for Heroku deployment)
-README.md (it's me!)
-server.js (setting up the express server)
```

##Tools
The Starter Boilerplate has been developed using the MEAN stack:
- MongoDB and Mongoose
- Express
- Angular
- Node.js
- Passport.js, bcrypt

##How to make it yours!
1. Install MongoDB, Express, Node.js and git on your machine
2. Open git shell or git bash
3. Run "git clone "
