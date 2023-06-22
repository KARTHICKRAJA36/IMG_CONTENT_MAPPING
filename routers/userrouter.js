const router = require("express").Router();
const create = require("../controllers/usercontroller/create")
const login = require("../controllers/usercontroller/login")
const update = require("../controllers/usercontroller/update")
const deleteuser = require("../controllers/usercontroller/delete")
const adminlogin = require("../controllers/usercontroller/adminlogin")
const checkadmin = require("../auth/authorization")

router.post('/createuser', checkadmin, create)
router.get('/readuser', login)
router.put('/updateuser/:id', checkadmin, update)
router.delete('/deleteuser/:id', checkadmin, deleteuser)
router.post('/adminlogin', adminlogin)


module.exports = router