const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class BodyPart extends Model {}

BodyPart.init({
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { 
  sequelize,
  timestamps: false,
})

module.exports = BodyPart