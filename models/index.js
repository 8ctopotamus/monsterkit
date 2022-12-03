const BodyPart = require('./bodyParts')
const Monster = require('./monsters')

BodyPart.belongsTo(Monster, {
  // as: 'arm',
  foreignKey: 'arm_id'
})

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'leg'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'body'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'eye'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'mouth'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'nose'
// })

Monster.hasOne(BodyPart, {
  foreignKey: 'arm_id'
})

// Monster.hasMany(BodyPart, {
//   foreignKey: 'leg'
// })

// Monster.hasOne(BodyPart, {
//   foreignKey: 'body'
// })
// // EDITED

// Monster.hasMany(BodyPart, {
//   foreignKey: 'eye'
// })

// Monster.hasMany(BodyPart, {
//   foreignKey: 'mouth'
// })

// Monster.hasMany(BodyPart, {
//   foreignKey: 'nose'
// })

module.exports = {
  BodyPart,
  Monster,
}