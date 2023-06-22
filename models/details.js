const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")
const Users =  require('../models/user')
const Contents = require("../models/content")
const Images = require("../models/image")


const Details = sequelize.define('Details',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },

},{
    timestamps: false,
    freezeTableName: true

})
Details.belongsTo(Users)
Users.hasMany(Details)

Details.belongsTo(Contents)
Contents.hasMany(Details)



module.exports=Details