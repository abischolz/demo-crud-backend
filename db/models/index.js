const db = require('../index')
const Student = require('./student');
const Campus = require('./campus');

Student.Campus = Student.belongsTo(Campus, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Campus.Student = Campus.hasMany(Student, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE' 
});




module.exports = {
    Student,
    Campus   
}