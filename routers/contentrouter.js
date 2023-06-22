const router = require("express").Router();
const upload = require("../middleware/fileupload")
const pdftoimg = require('../controllers/contentcontroller/imgextract')
const createcontent = require('../controllers/contentcontroller/create')
const preview = require("../controllers/contentcontroller/imagepreview")
const updatecontent = require("../controllers/contentcontroller/update")
const deleteContent = require("../controllers/contentcontroller/delete")
const readData = require("../controllers/contentcontroller/read")
const deleteImage = require("../controllers/contentcontroller/imagedelete")
const updateImage = require("../controllers/contentcontroller/imageupdate")
const checkadmin = require("../auth/authorization")

router.post('/extractimage', upload.single('pdf'), pdftoimg)
router.post('/createcontent', checkadmin, createcontent)
router.get('/:filename', preview)
router.put('/updatecontent/:id', checkadmin, updatecontent)
router.delete('/deletecontent/:id', checkadmin, deleteContent)
router.post('/readdata/:id', readData)
router.delete('/:filename/:id', deleteImage)
router.put('/:filename/:id', updateImage)

module.exports = router