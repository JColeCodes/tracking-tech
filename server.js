const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SECRET,
    cookie: { maxAge: 60 * 60 * 1000 }, // Logs out user after 1 hour of inactivity
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});