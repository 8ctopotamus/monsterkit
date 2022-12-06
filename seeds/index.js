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

sequelize.sync({ force: true }).then(async () => {
  const filenames = fs.readdirSync(path.join(__dirname, '..', 'public', 'assets', 'kenney_monsterbuilderpack', 'PNG', 'Default'))

 let bodyPartSeeds = filenames
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
    arm_id: 1,
    leg_id: 84,
    body_id: 31,
    eye_id: 83,
    num_eyes: 1,
    mouth_id: 114,
    nose_id: 121
  })

  await Monster.create({
    name: 'Monster 2',
    arm_id: 30,
    leg_id: 94,
    body_id: 3,
    eye_id: 85,
    num_eyes: 3,
    mouth_id: 113,
    nose_id: 120
  })

  console.log('DB seeded!')
  process.exit(0)
})



