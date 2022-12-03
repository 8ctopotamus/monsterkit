const fs = require('fs')
const path = require('path')
const sequelize = require('../config/connection')
const { BodyPart, Monster } = require('../models')

const bodyPartKeywords = [
  'eye',
  'body',
  'leg',
  'mouth',
  'nose',
  'arm'
]

sequelize.sync({force: true}).then(async () => {
  const filenames = fs.readdirSync(path.join(__dirname, '..', 'assets', 'kenney_monsterbuilderpack', 'PNG', 'Default'))

  const bodyPartSeeds = filenames
    .filter(fileName => {
      const splitFileName = fileName.split('_') // ['arm', 'blue]
      const foundKeyword = splitFileName.find(piece => bodyPartKeywords.includes(piece))
      return foundKeyword
    })
    .map(fileName => {
      const splitFileName = fileName.split('_') // ['arm', 'blue]
      const category = splitFileName.find(piece => bodyPartKeywords.includes(piece))
      return {
        fileName,
        category,
      }
    })

  await BodyPart.bulkCreate(bodyPartSeeds)

  await Monster.create({
    name: 'Mike Wazowski',
    arm: 1,
    leg: 84,
    body: 31,
    eye: 83,
    numEyes: 1,
    mouth: 114,
    nose: 121
  })
})

