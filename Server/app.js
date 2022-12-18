var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt')
const saltRounds = 10
var jwt = require('jsonwebtoken')
const secret = 'Fullstack-login-2022'

app.use(cors())

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '130247',
    database: 'mydb'
});

// Register System
app.post('/register', jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        connection.execute(
            'INSERT INTO users (user, email, password, fname, lname) VALUES (?, ?, ?, ?, ?)',
            [req.body.user, req.body.email, hash, req.body.fname, req.body.lname],
            function (err, results, fields) {
                if (err) {
                    res.json({ status: 'error', message: err })
                    return
                }
                res.json({ status: 'ok' })
            }
        );
    });
})

// Login System
app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM users WHERE user=?',
        [req.body.user],
        function (err, users, fields) {
            if (err) { res.json({ status: 'error', message: err }); return }
            if (users.length == 0) { res.json({ status: 'error', message: 'No User Found' }); return }
            bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ user: users[0].user }, secret, { expiresIn: '1h' });
                    res.json({ status: 'ok', message: 'Login Successful', token })
                } else {
                    res.json({ status: 'error', message: 'Login Failed' })
                }
            });
        }
    );
})

// Authen System
app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'ok', username:decoded.user, email:decoded.email })
    } catch (err) {
        res.json({ status: 'error', message: err.message })
    }
})

// Logout System

app.listen(7777, function () {
    console.log('This Is Web Server Port : 7777')
})