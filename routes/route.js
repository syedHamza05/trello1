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

// board
router.post("/board", controller.board)
router.get("/getBoard", controller.getBoard)
router.put("/updateBoard/:id", controller.updateBoard) 
router.delete("/deleteBoard/:id", controller.deleteBoard) 
// card
router.post("/card", controller.card)
router.get("/getCard", controller.getCard)
router.put("/updateCard/:id", controller.updateCard) 
router.delete("/deleteCard/:id", controller.deleteCard) 
// activity
router.post("/activity", controller.activity)
router.get("/getActivity", controller.getActivity)
router.put("/updateActivity/:id", controller.updateActivity) 
router.delete("/deleteActivity/:id", controller.deleteActivity)
// list 
router.post("/list", controller.list)
router.get("/getList", controller.getList)
router.put("/updateList/:id", controller.updateList) 
router.delete("/deleteList/:id", controller.deleteList) 


module.exports = router

