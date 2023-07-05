const express = require('express');
require('dotenv').config(); 

const cors = require('cors');
const db = require('./db')

const app = express(); 

app.use(express.json());
app.use(cors());

// app.use('/api', require('./api'))


const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log('SERVER UP AND RUNNING ON PORT ', process.env.PORT)
    })
}
const connectDB = async () => {
    try {
        // check to see if db is initialized 
        if (db.getDatabaseName()) {
            await db.authenticate();
            console.log('DB connected on port 5432')
        }

    } catch (error) {
        console.log('Could not connect to the database. Error => ', error)
    }
}
connectDB();

startServer(); 
connectDB(); 
