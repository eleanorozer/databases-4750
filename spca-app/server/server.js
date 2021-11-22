const express = require('express');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 5000;
const session = require("express-session");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * This is the database/XAMPP side of things, hosted on port 5000.
 * This "server" will emit endpoints that the frontend will connect to: 
 *      i.e., localhost:5000/animals
 * Those functions are written in client/DatabaseAPI.js.
 */

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
);

// MySQL things
const connection = mysql.createConnection({
    host            : 'localhost', // localhost:3306
    user            : 'eozer',
    password        : 'admin',
    database        : 'spca_application'   
});

// Register
app.post("/register", (req, res) => {
    const {phone, password} = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err != null) {
            console.log(err);
        }

        connection.query(
            "INSERT INTO accounts (phone, hashed_pass) VALUES (?,?)",
            [phone, hash],
            (err, result) => {
                console.log(err);
                res.send({ message: "Wrong phone number/password combination!" });
                if (!err) { console.log("USER REGISTERED"); 
            }
        })
    });
});

// Login
app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});

// Login
app.post("/login", (req, res) => {
   // res.json("login");
    const {phone, password} = req.body;
  
    connection.query(
      "SELECT hashed_pass, first_name FROM accounts WHERE phone = ?;",
      phone,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].hashed_pass, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong phone number/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
});

app.get("/profile", (req, res) => {
    res.json("Profile");
});

// Get all animals in our database
app.get('/animals', (req, res) => {
    connection.query('SELECT * from animals', (err,rows) => {
        if(!err) {
            res.send(rows[0])
        } else {
            console.log(err)
        }

        // if (err) throw err
        console.log('The animals are: \n', rows)
    })

})

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

