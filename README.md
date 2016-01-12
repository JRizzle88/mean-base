##App tree
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
---home
----controllers
-----HomeController.js
----views
-----home.html
---index
----controllers
-----IndexController.js
---Users
----controllers
-----LoginController.js
-----SignupController.js
----views
-----login.html
-----signup.html
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


##Getting Started
1. Install MongoDB, Express, Node.js and git on your machine
2. Run "npm install"
4. Run the server with "node server.js"
5. Wait to see the following in you command line "App listening on port 8080"
6. Open your browser and go [here](http://localhost:8080) to see it live
