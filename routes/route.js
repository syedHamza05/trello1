// var multer = require('multer');
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// var upload = multer({ storage: storage });

const router = require('express').Router()
const controller = require("../controller/controllers")

router.post("/board", controller.board)
router.get("/getBoard", controller.getBoard)
router.put("/updateBoard/:id", controller.updateBoard) 
router.delete("/deleteBoard/:id", controller.deleteBoard) 

module.exports = router

