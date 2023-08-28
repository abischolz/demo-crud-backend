const {Sequelize} = require('sequelize'); 

const db = new Sequelize(`postgres://${process.env.PG_INSTANCE}`, {
    logging: false
}); 



module.exports = db;