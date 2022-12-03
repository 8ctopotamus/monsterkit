const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Monster extends Model {}

Monster.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arm: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  leg: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  body: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  eye: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  numEyes: {
    type: DataTypes.INTEGER,
    default: 0,
  },
  mouth: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  nose: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  }
}, { sequelize })

module.exports = Monster