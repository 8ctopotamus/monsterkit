const sequelize = require('./config/connection')

require('./models')

sequelize.sync({ force: true })