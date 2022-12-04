const BodyPart = require('./bodyParts')
const Monster = require('./monsters')

BodyPart.belongsTo(Monster, {
  // as: 'arm',
  foreignKey: 'arm_id'
})

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'leg_id'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'body_id'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'eye_id'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'mouth_id'
// })

// BodyPart.belongsTo(Monster, {
//   foreignKey: 'nose_id'
// })

Monster.hasOne(BodyPart, {
  foreignKey: 'arm_id'
})

// Monster.hasMany(BodyPart, {
//   foreignKey: 'leg_id'
// })

// Monster.hasOne(BodyPart, {
//   foreignKey: 'body_id'
// })
// // EDITED

// Monster.hasMany(BodyPart, {
//   foreignKey: 'eye_id'
// })

// Monster.hasMany(BodyPart, {
//   foreignKey: 'mouth_id'
// })

// Monster.hasMany(BodyPart, {
//   foreignKey: 'nose_id'
// })

module.exports = {
  BodyPart,
  Monster,
}