const board = require("../model/board")
const activity = require("../model/activity")
const card = require("../model/card")
const list = require("../model/list")

exports.board((req,res, next)=>{
    try {
    const boards =await board.create(req.body)
    return await utility.success(res, boards, "Board has been created")
    } catch (error) {
        return error
    }    
})

exports.getBoard((req,res,next)=>{
    try {
        const boards = await board.find(req.body)
        return await utility.success(res, boards, "These are the boards")
    } catch (error) {
        return error
    }
})

exports.updateBoard((req,res,next)=>{
    try {
        const boards = await board.findOneAndUpdate({_id:req.body.id},req.body,{new:true})
        return await utility.success(res, boards, "Board has been updated")
    } catch (error) {
        return error
    }
})

exports.deleteBoard((req,res,next)=>{
    try {
        const boards = await board.deleteOne({_id:req.body.id})
        return await utility.success(res, boards, "Board has been deleted")
    } catch (error) {
        return error
    }
})