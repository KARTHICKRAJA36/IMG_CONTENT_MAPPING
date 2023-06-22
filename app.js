const express = require("express")
const app = express()
const sequelize = require("./config/db")
const Users = require("./models/user")
const Contents = require("./models/content")
const Images = require("./models/image")
const Details = require("./models/details")
const userrouter = require("./routers/userrouter")
const contentrouter = require("./routers/contentrouter")
const maintablerouter = require("./routers/maintablerouter")
const globalerrorhandle = require("./utils/globalerror")

require("dotenv").config()
app.use(express.json())
let port = process.env.PORT_NO

sequelize.sync()
    .then(() => {
        console.log('tables created...');
    })
    .catch((error) => {
        console.log('error occurs while table creation' + error.message);
    })
app.use(userrouter);
app.use(contentrouter);
app.use(maintablerouter);

app.all('*', (req, res, next) => {
    const err = new Error('cannot find the ${req.originalUrl} in the server');
    err.status = 'failure';
    err.statuscode = 404;

    next(err);
})
app.use(globalerrorhandle)






app.listen(port, () => {
    console.log(`port running at ${port}`);
})

