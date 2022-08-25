const board = require("../model/board")
const activity = require("../model/activity")
const card = require("../model/card")
const list = require("../model/list")
const utility = require("../Utility/utility")


// ********** Board Api's ************

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

// ********** Card Api's ************

exports.card=async(req,res)=>{
    const Card = await card.create(req.body)
    return await utility.success(res, Card, "Board has been created") 
}

exports.getCard= async(req,res,next)=>{
    try {
        const Card = await card.find(req.body)
        return await utility.success(res, Card, "These are the boards")
    } catch (error) {
        return error
    }
}

exports.updateCard= async(req,res,next)=>{
    try {
        const Card = await card.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        return await utility.success(res, Card, "Board has been updated")
    } catch (error) {
        return error
    }
}

exports.deleteCard= async(req,res,next)=>{
    try {
        const Card = await card.deleteOne({_id:req.params.id})
        return await utility.success(res, Card, "Board has been deleted")
    } catch (error) {
        return error
    }
}

// **********Activity Api's************

exports.activity=async(req,res)=>{
    const Activity = await activity.create(req.body)
    return await utility.success(res, Activity, "Board has been created") 
}

exports.getActivity = async(req,res,next)=>{
    try {
        const Activity = await activity.find(req.body)
        return await utility.success(res, Activity, "These are the boards")
    } catch (error) {
        return error
    }
}

exports.updateActivity= async(req,res,next)=>{
    try {
        const Activity = await activity.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        return await utility.success(res, Activity, "Board has been updated")
    } catch (error) {
        return error
    }
}

exports.deleteActivity= async(req,res,next)=>{
    try {
        const Activity = await activity.deleteOne({_id:req.params.id})
        return await utility.success(res, Activity, "Board has been deleted")
    } catch (error) {
        return error
    }
}

// **********List Api's************

exports.list=async(req,res)=>{
    const List = await list.create(req.body)
    return await utility.success(res, List, "Board has been created") 
}

exports.getList = async(req,res,next)=>{
    try {
        const List = await list.find(req.body)
        return await utility.success(res, List, "These are the boards")
    } catch (error) {
        return error
    }
}

exports.updateList= async(req,res,next)=>{
    try {
        const List = await list.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        return await utility.success(res, List, "Board has been updated")
    } catch (error) {
        return error
    }
}

exports.deleteList= async(req,res,next)=>{
    try {
        const List = await list.deleteOne({_id:req.params.id})
        return await utility.success(res, List, "Board has been deleted")
    } catch (error) {
        return error
    }
}



