const mongoose = require("mongoose")

const dbConnection = async ()=>{
    try {
        console.log("MongoDb connect:", process.env.DB_CONNECT)
        const connect = await mongoose.connect("mongodb://localhost:27017/Trello",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then((connect)=>{
            console.log(`mongoDB connected:`, connect.connection.host)
        })
    } catch (error) {
        console.log('error while connectingdb' + error)
    }
}

module.exports = {dbConnection}