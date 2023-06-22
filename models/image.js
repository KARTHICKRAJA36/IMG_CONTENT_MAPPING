const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")
const Contents = require("../models/content")


const Images = sequelize.define('Images',{
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps: false,
    freezeTableName: true

})
Images.belongsTo(Contents)
Contents.hasMany(Images)

module.exports=Images