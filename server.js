const sequelize = require('./config/connection')
const express = require('express')
const routes = require('./controllers')
const { create } = require('express-handlebars')
const helpers = require('./utils/template-helpers')

const app = express()
const PORT = process.env.PORT || 3001

const hbs = create({
    helpers,
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))
app.use(express.json())
app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})