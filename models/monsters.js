const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Monster extends Model { }

Monster.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arm_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id',
    }
  },
  leg_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  body_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  eye_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  num_eyes: {
    type: DataTypes.INTEGER,
    default: 0,
  },
  mouth_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  },
  nose_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'BodyParts',
      key: 'id'
    }
  }
}, { sequelize, underscored: true })

module.exports = Monster