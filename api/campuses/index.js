const router = require('express').Router(); 
const { authPlaceholder } = require('../../middleware')
const { Campus } = require('../../db/models')



router.get('/', authPlaceholder, async (req, res, next) => {
    try {
        console.log('now we are getting campuses ')
        const campuses = await Campus.findAll(); 

        res.status(200).json(campuses)
    } catch (err) {
        console.log('An error happened in the get students route ', error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id); 
        res.status(200).json(campus)
    } catch (error) {
        console.log('Error while retrieving student ',  error)
    }
})

module.exports = router;