require('dotenv').config(); 
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const cors = require('cors');
const db = require('./db')
const morgan = require('morgan');
const  seed  = require('./seed');
const bcrypt = require("bcrypt");



const app = express();
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', require('./api'))


const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log('SERVER UP AND RUNNING ON PORT ', process.env.PORT)
    })
}
const connectDB = async () => {
    try {

        await db.sync({force: true});
        console.log('db connected')

    } catch (error) {
        console.log('Could not connect to the database. Error => ', error)
    }
}

// wrapper function 
async function init() {
    try {
        startServer(); 
        await connectDB(); 
        await seed();

    } catch(error) {
        console.log('ERROR => ', error)
    }
}

init();

