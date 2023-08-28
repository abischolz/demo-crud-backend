const { DataTypes } = require('sequelize'); 
const db = require('../../index');

const Student = db.define('Student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "First name is required."
            }
        }
    }, 
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "Last name is required."
            }
        }
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true, 
        validate: {
            notEmpty: {
                msg: "Please provide an email address."
            },
            isEmail: {
                msg: "Only valid emails are accepted."
            }
        }
    }, 
    imageUrl: {
        type: DataTypes.TEXT, 
        default: "https://content.mattressadvisor.com/wp-content/uploads/2018/06/sleepy-college-student-e1528920324792-1024x683.jpg",
    },
    gpa: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true, 
            min: 0.0,
            max: 4.0
        }
    }

    }
)

module.exports = Student;