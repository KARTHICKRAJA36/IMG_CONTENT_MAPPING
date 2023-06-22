const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")
const Users = require("../models/user")


const Contents = sequelize.define('Contents',{
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    timestamps: false,
    freezeTableName: true

})



module.exports=Contents

