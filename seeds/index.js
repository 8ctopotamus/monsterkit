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
  // console.log(bodyPartSeeds)


  await Monster.create({
    name: 'Mike Wazowski',
    arm_id: 1,
    leg_id: 84,
    body_id: 31,
    eye_id: 83,
    num_eyes: 30,
    mouth_id: 100,
    nose_id: 121
  })

  // await Monster.create({
  //   name: 'Monster',
  //   arm_id: 30,
  //   leg_id: 94,
  //   body_id: 3,
  //   eye_id: 85,
  //   num_eyes: 90,
  //   mouth_id: 111,
  //   nose_id: 120
  // })
})



