const router = require('express').Router(); 
const { Student } = require('../../db/models')


router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll(); 

        res.status(200).json(students)
    } catch (err) {
        console.log('An error happened in the get students route ', err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id); 
        res.status(200).json(student)
    } catch (error) {
        console.log('Error while retrieving student ',  error)
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        // destructure req.body 
    } catch (error) {
        
    }
})


module.exports = router;