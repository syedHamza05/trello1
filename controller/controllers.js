const board = require("../model/board")
const activity = require("../model/activity")
const card = require("../model/card")
const list = require("../model/list")
const utility = require("../Utility/utility")

exports.board=async(req,res)=>{
    const boards = await board.create(req.body)
    return await utility.success(res, boards, "Board has been created") 
}

exports.getBoard = async(req,res,next)=>{
    try {
        const boards = await board.find(req.body)
        return await utility.success(res, boards, "These are the boards")
    } catch (error) {
        return error
    }
}

exports.updateBoard= async(req,res,next)=>{
    try {
        const boards = await board.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        return await utility.success(res, boards, "Board has been updated")
    } catch (error) {
        return error
    }
}

exports.deleteBoard= async(req,res,next)=>{
    try {
        const boards = await board.deleteOne({_id:req.params.id})
        return await utility.success(res, boards, "Board has been deleted")
    } catch (error) {
        return error
    }
}