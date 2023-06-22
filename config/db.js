const Sequelize = require("sequelize")
require("dotenv").config()
let schema = process.env.DATABASE
let user = process.env.USER
let password = process.env.PASSWORD
const sequelize = new Sequelize(schema, user, password, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
})
module.exports = sequelize