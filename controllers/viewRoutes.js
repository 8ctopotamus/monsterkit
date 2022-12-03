const router = require('express').Router()
const { Monster, BodyPart } = require('../models')
const sequelize = require('sequelize')


router.get('/', async (req, res) => {
    try {
        const monsters = await Monster.findAll({})
        const bodyParts = await BodyPart.findAll({})

        var serelizedBodyParts = bodyParts.map(bp => bp.get({ plain: true }))

        console.log(serelizedBodyParts)

        var serelizedMonsters = monsters.map(m => {
            const eye = serelizedBodyParts.find(bp => bp.id = m.eye_id)
            const arm = serelizedBodyParts.find(bp => bp.id = m.arm_id)
            const body = serelizedBodyParts.find(bp => bp.id = m.body_id)
            const leg = serelizedBodyParts.find(bp => bp.id = m.leg_id)
            const nose = serelizedBodyParts.find(bp => bp.id = m.nose_id)
            const mouth = serelizedBodyParts.find(bp => bp.id = m.mouth_id)
            console.log(nose, leg, body)
            return {
                ...m.get({ plain: true }),
                eye,
                arm,
                body,
                leg,
                nose,
                mouth
            }
        })
        console.log(serelizedMonsters)
        res.render('homepage', {
            monsters: serelizedMonsters
        })
    }
    catch (err) { res.status(500).json(err) }
})

module.exports = router