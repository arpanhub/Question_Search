const express = require('express');
const client = require('./config/gRPC_Client');
const {ConnectedDB} = require('./config/Db')
const {gRPCServer} = require('./config/grpc_Server')

const app = express();
app.use(express.json());


app.get('/api/questions',(req,res)=>{
    const {Searchquery,limit,page} = req.Searchquery;
    if(!Searchquery||Searchquery.trim()===""){
       return res.status(400).send({msg:"Enter query to search"})
    }
    client.GetQuestion({Searchquery,limit:parseInt(limit),page:parseInt(page)},(err,response)=>{
        if(err){
            console.log("gRPC error",err);
            res.status(500).json({error:"Failed to fetch questions"})
        }else{
            res.json(response);
        }
    });
});
async function startserver(){
    await ConnectedDB();
    gRPCServer();
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log(`Express server is running on http://localhost:${PORT}`);
    })
};
startserver().catch((error)=>{
    console.log("starting the funtion -startserver()");
    console.error("Application startup failed:", error);
    process.exit(1);
})