const { DataTypes } = require('sequelize'); 
const db = require('../../index');

const Campus = db.define('Campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "Name cannot be empty."
            },
        }
    },
    imageUrl: {
        type: DataTypes.TEXT,
        default: "https://www.parcelpending.com/wp-content/uploads/2019/04/ryan-jacobson-cXUOQWdRV4I-unsplash-scaled-2.jpg",
        validate: {
            isUrl: {
                msg: 'This value must be a valid URL.'
            }
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'Campus must have an address.'
            },            
        }
    },
    description: {
        type: DataTypes.TEXT, 
    }
})

module.exports = Campus;