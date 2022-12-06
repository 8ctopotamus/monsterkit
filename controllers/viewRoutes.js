const router = require('express').Router()
const { Monster, BodyPart } = require('../models')
const sequelize = require('../config/connection')

router.get('/', async (req, res) => {
    try {
        let query = `
            SELECT 
                monsters.id,
                monsters.name,
                monsters.num_eyes,
                arms.filename as arms,
                legs.filename as legs,
                body.filename as body,
                eyes.filename as eyes,
                mouth.filename as mouth,
                nose.filename as nose
            FROM monsters 
            JOIN bodyparts AS arms ON arms.id = monsters.arm_id
            JOIN bodyparts AS legs ON legs.id = monsters.leg_id
            JOIN bodyparts AS body ON body.id = monsters.body_id
            JOIN bodyparts AS eyes ON eyes.id = monsters.eye_id
            JOIN bodyparts AS mouth ON mouth.id = monsters.mouth_id
            JOIN bodyparts AS nose ON nose.id = monsters.nose_id
        `

        const [monsters] = await sequelize.query(query)

        console.log(monsters)

        res.render('homepage', { monsters })
    }
    catch (err) { 
        res.status(500).json(err) 
    }
})

module.exports = router