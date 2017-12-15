require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require("express-session")
    , massive = require("massive")
    , axios = require("axios")
    , passport = require("passport")
    , Auth0Strategy = require("passport-auth0")
    , controller = require('./controller')
    , app = express()
    , PORT = 8888;

    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../build`));

    app.post('/api/create_book', controller.create_book);

    app.listen(PORT, () => (console.log(`Listenign on port ${PORT}`)));