const express = require('express')
require('dotenv').config()
const {log} = require("nodemon/lib/utils");
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors  = require('cors')
const {response, request} = require("express")
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleWare')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)




//идет последним - обработка ошибок
app.use(errorHandler)

/*app.get('/', (request, response) => {
    response.status(200).json({message:'WORKING!'})
})*/

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