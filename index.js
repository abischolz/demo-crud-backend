const express = require('express'); 
const cors = require('cors');
require('dotenv').config();

const app = express(); 

app.use(cors());
app.use(express.json()); 

app.use('/api', require('./api'));

//server start 
const startServer = () => {
    app.listen(PROCESS.ENV.PORT, () => {
        console.log('Server up and running at ', PROCESS.ENV.PORT)
    })
}

startServer();


