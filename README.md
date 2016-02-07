#MEAN Base
###Objective
To tailor a reusable MEAN stack.

###Current Features
```
User model
- role: string - default: basic
- admin: boolean - default: false
- license: string - default:

Areas
- Account
-- Accessible by registered users.

- Admin
-- Accessible by authorized admin users.

Authentication
- isLoggedIn checks for each specific route
```

###Cloning and Launching Locally
1. Install Node.js, MongoDB, Express, and git on your machine
2. Clone the repository git@github.com:JRizzle88/mean-base.git
3. Run "npm install" to install packages listed in package.json
4. Run the server with "node server.js"
5. Wait until you see "App listening on port 8080" in your command terminal
6. Open your browser and go [here](http://localhost:8080) to see it live.
7. Get creative.

###Current Ideas
```
- Add User manager in the Admin area
- Improve area authorization
- Improve session verifier isLoggedIn
```

```
Feel free to submit issues or suggested features.
```
