const router = require("express").Router();

const createdetails = require("../controllers/tablecontroller/create")
const getMaps = require('../controllers/tablecontroller/readalll')
const updatedetail = require("../controllers/tablecontroller/update")
const readparticular = require("../controllers/tablecontroller/read")
const { deletedetails } = require("../controllers/tablecontroller/delete")
const { deleteUserid } = require("../controllers/tablecontroller/delete")
const checkadmin = require("../auth/authorization")

router.post('/createdetails', checkadmin, createdetails)
router.post('/readdetails', checkadmin, getMaps)
router.post('/updatedetails/:id', checkadmin, updatedetail)
router.post('/Readspecific/:userId', readparticular)
router.post('/removedetails/:id', checkadmin, deletedetails)
router.post('/deleteUserid/:id', checkadmin, deleteUserid)

module.exports = router