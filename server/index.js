const express = require('express')
require('dotenv').config()
const {log} = require("nodemon/lib/utils");
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors  = require('cors')
const app = express()


const start = async () => {
    try {
       await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => (`Server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()