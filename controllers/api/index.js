const router = require('express').Router()
const monsterRoutes = require('./monsterRoutes')

router.use('/monsters', monsterRoutes)

module.exports = router