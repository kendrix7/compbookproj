require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require("express-session")
    , massive = require("massive")
    , axios = require("axios")
    , passport = require("passport")
    , Auth0Strategy = require("passport-auth0")
    , app = express()
    , PORT = 8888;

    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../build`));
    
    
    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    massive(process.env.CONNECTION_STRING).then((db) => {
        console.log('db is connected');
        app.set('db', db);
    });
    
    passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK
    }, function (accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');
        const userData = profile._json;
        db.find_user([userData.identities[0].user_id])
            .then((user) => {
                if (user[0]) {
                    return done(null, user[0].id);
                } else {
                    db.create_user([
                        userData.given_name,
                        userData.family_name,
                        userData.email,
                        userData.identities[0].user_id
                    ]).then((user) => {
                        return done(null, user[0].user_id);
                    }).catch(err => console.log('create', err))
                }
            }).catch(err => console.log('find', err));
    }));
    
    passport.serializeUser(function (id, done) {
        done(null, id);
    })
    passport.deserializeUser(function (id, done) {
        app.get('db').find_session_user([id])
            .then((user) => {
                return done(null, user[0]); // put on req.user for BACKEND use
            })
    })

    app.listen(PORT, () => (console.log(`Listenign on port ${PORT}`)));