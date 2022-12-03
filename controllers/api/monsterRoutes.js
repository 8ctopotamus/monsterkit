const router = require('express').Router()
const { Monster, BodyPart, Monster } = require('../../models')

//Get all
router.get('/', async (req, res) => {
    try {
        const monster = await Monster.findAll({
            include: [BodyPart]
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
}) //DONE

//Get one by ID
router.get('/:id', async (req, res) => {
    try {
        const monster = await Monster.findOne({
            where: {
                id: req.params.id
            },
            include: [BodyPart]
        })
        res.json(monster)
    }
    catch (err) {
        res.status(500).json(err);
    }
}) //DONE

//Create
router.post('/', async (req, res) => {
    try {
        const monster = await Monster.create(req.body)
        res.json(monster)
    }
    catch (err) {
        res.status(500).json(err);
    }
}) //DONE

//Update by ID
router.put('/:id', async (req, res) => {
    try {
        const monster = await Monster.update(
            req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json('Monster Updated!')
    }
    catch (err) {
        res.status(500).json(err);
    }
}) //DONE

//Delete by ID
router.delete('/:id', async (req, res) => {
    try {
        const monster = await Monster.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(monster)
    }
    catch (err) {
        res.status(500).json(err);
    }
}) //DONE

module.exports = router