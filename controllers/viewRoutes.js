const router = require('express').Router()
const { Monster, BodyPart } = require('../models')
const sequelize = require('../config/connection')



router.get('/', async (req, res) => {
    try {
        let query = `SELECT monsters.id,
         arms.filename,
          legs.filename,
          body.filename,
          eyes.filename,
          mouth.filename,
          nose.filename
           FROM monsters 
        LEFT JOIN bodyparts AS arms ON arms.id = monsters.arm_id
        LEFT JOIN bodyparts AS legs ON legs.id = monsters.leg_id
        LEFT JOIN bodyparts AS body ON body.id = monsters.body_id
        LEFT JOIN bodyparts AS eyes ON eyes.id = monsters.eye_id
        LEFT JOIN bodyparts AS mouth ON mouth.id = monsters.mouth_id
        LEFT JOIN bodyparts AS nose ON nose.id = monsters.nose_id`


        const [results, metadata] = await sequelize.query(query)

        console.log(results)

        res.render('homepage', { results })
    }
    catch (err) { res.status(500).json(err) }
})

module.exports = router







        // let monsters = await Monster.findAll({})
        // let bodyParts = await BodyPart.findAll({})

        // bodyParts = bodyParts.map(bp => bp.get({ plain: true }))
        // monsters = monsters.map(m => m.get({ plain: true }))
        


        // console.log(bodyParts)
        // console.log(monsters)
        // monsters = monsters.map(m => {

        //     const eye = bodyParts.find(bp => bp.id = m.eye_id)
        //     const arm = bodyParts.find(bp => bp.id = m.arm_id)
        //     const body = bodyParts.find(bp => bp.id = m.body_id)
        //     const leg = bodyParts.find(bp => bp.id = m.leg_id)
        //     const nose = bodyParts.find(bp => bp.id = m.nose_id)
        //     const mouth = bodyParts.find(bp => bp.id = m.mouth_id)

            

        //     console.log(eye)
        //     return {
        //         ...m.get({ plain: true }),
        //         arm,
        //         leg,
        //         body,
        //         eye,
        //         mouth,
        //         nose
        //     }

        // })