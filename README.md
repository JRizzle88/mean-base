#Boilerplate
Welcome to my Starter Boilerplate!

##Features
- MEAN stack
- Bootstrap for frontend
- Passport.js Authentication already implemented and working
- Angular routing with:
  - Main Index view (navigator, footer and user greeting when loggedin)
  - Home view (presentation)
  - Login and Signup views for authentication
- Express routing for api calls and authentication backend
- Example of Thing mongoose model already implemented with relative api calls for creating, deleting, updating and retrieving
- Easy to adapt and scale
- Fast Heroku deployment

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
--img (add all your images here)
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
- Bootstrap for frontend

##How to make it yours!
1. Install MongoDB, Express, Node.js and git on your machine
2. Open the git shell or the git bash
3. Run "git clone https://github.com/NicolaFerracin/starter-boilerplate"
4. Start mongodb by typing "mongod" in the command line
4. Open another command line, navigate inside the main app folder and type "node server.js"
5. Wait to see the following in you command line "App listening on port 8080"
5. Open your browser and go [here](http://localhost:8080) to see it live
6. Edit the files, save, restart the server and make it yours!

##Deploy to Heroku
1. Create an account on [Heroku](https://signup.heroku.com/login)
2. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)
3. Open the git shell or the git bash and navigate inside the main folder of your app
4. Run "heroku login" and follow the instructions
5. Run "heroku create"
