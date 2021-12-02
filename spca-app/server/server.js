const express = require('express');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 5000;
const session = require("express-session");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * This file contains every SQL command we will use. 
 * 
 * This is the database/XAMPP side of things, hosted on port 5000.
 * This "server" will emit endpoints that the frontend will connect to: 
 *      i.e., localhost:5000/animals
 * Those functions are written in client/src/DatabaseAPI.js.
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
    user            : 'root',
    password        : '',
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
                if (!err) 
                { 
                  console.log("USER REGISTERED"); 
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
    connection.query('SELECT * \
      FROM animals JOIN animal_photo \
      ON animals.ID=animal_photo.animal_id', 
      (err,rows) => {
        if(!err) {
            console.log("HERE ARE THE ROWS");
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err)
        }
    })
});

app.post('/animal:id', (req, res) => {
  const { id } = req.body;

  connection.query(
    "SELECT * \
     FROM animals JOIN animal_photo \
     ON animals.ID=animal_photo.animal_id \
     WHERE ID = ?;", 
  id,
  (err,result) => {
      if(!err) {
          res.send(result);
      } else {
          res.send({ err: err });
          console.log(err)
      }
  })
});

app.post('/addanimal', (req, res) => {
  const {name, status, sex, description, url, breed, type} = req.body;
  let key = 0;
  console.log(req.body);
  connection.query(
    "INSERT INTO Animals(Name,AnimalType, \
      Sex,Breed,Description,AdoptionStatus) VALUES (?,?,?,?,?,?);", 
          [name, type, sex, breed, description, status],
    (err,result) => {
      if(!err) {
          console.log("animal added!")
      } else {
          console.log(err)
      }
  })
  // grab the id of the last entry and insert URL into photos
  connection.query(
    "SELECT LAST_INSERT_ID();",
    (err,result) => {
      if(!err) {
          console.log("id = " + result[0]['LAST_INSERT_ID()']);
          connection.query(
            "INSERT INTO animal_photo(animal_id,photo_url) VALUES (?,?);",
              [ result[0]['LAST_INSERT_ID()'] , url ],
          (err,result) => {
            if(!err) {
                console.log("alls well that ends well");
            } else {
                console.log(err)
            }
        })
      } else {
          console.log(err)
      }
  })
});

// Sort all animals in our database
app.post('/sortAnimals', (req, res) => {
  const { sortId } = req.body;

  const query = "SELECT * \
  FROM animals JOIN animal_photo \
  ON animals.ID=animal_photo.animal_id \
  ORDER BY " + sortId;

  //console.log(query);

  connection.query(
    query,
  (err,result) => {
      if(!err) {
          res.send(result);
      } else {
          res.send({ err: err });
          console.log(err)
      }
  })
});

app.post('/profile:id', (req, res) => {
  const { id } = req.body;

  connection.query(
    "SELECT * \
     FROM accounts NATURAL JOIN users \
     WHERE phone = ?;", 
  id,
  (err,result) => {
      if(!err) {
          res.send(result);
          console.log(result);
      } else {
          res.send({ err: err });
          console.log(err)
      }
  })
});

// Sort all animals in our database
app.post('/sortAnimalsType', (req, res) => {
  const { sortId } = req.body;

  const query = "SELECT * \
  FROM animals JOIN animal_photo \
  ON animals.ID=animal_photo.animal_id \
  WHERE AnimalType = '" + sortId + "'";

  connection.query(
    query,
  (err,result) => {
      if(!err) {
          res.send(result);
      } else {
          res.send({ err: err });
          console.log(err)
      }
  })
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

