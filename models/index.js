const BodyPart = require('./bodyParts')
const Monster = require('./monsters')

BodyPart.belongsTo(Monster, {
  foreignKey: 'arm'
})

BodyPart.belongsTo(Monster, {
  foreignKey: 'leg'
})

BodyPart.belongsTo(Monster, {
  foreignKey: 'body'
})

BodyPart.belongsTo(Monster, {
  foreignKey: 'eye'
})

BodyPart.belongsTo(Monster, {
  foreignKey: 'mouth'
})

BodyPart.belongsTo(Monster, {
  foreignKey: 'nose'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'arm'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'leg'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'body'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'eye'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'mouth'
})

Monster.hasMany(BodyPart, {
  foreignKey: 'nose'
})

module.exports = {
  BodyPart,
  Monster,
}