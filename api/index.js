var Express=require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin:admin123@cluster0.ihbj5tj.mongodb.net/?retryWrites=true&w=majority";





var DATABASENAME="Loginuserlistdb";
var database;


app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    })
})
app.get('/api/Loginuserlist/GetNotes', (request,response)=>{
    database.collection("Loginuserlistcollection").find({}).toArray((error,result)=>{
      response.send(result);        
    });
})
app.post('/api/Loginuserlist/GetNotes',multer().none(),(request,response)=>{
    database.collection("Loginuserlistcollection").count({}).function((error,numOfDocs)=>{
        database.collection("Loginuserlistcollection").insertOne({
            id:(numOfDocs+1).toString(),
            username:request.body.newNotes,
            email:request.body.newNotes,
            password:request.body.newNotes
            
        });
        response.json("Added Successfully");
    })
})

app.delete('/api/Loginuserlist/GetNotes',(request,response)=>{
   database.collection('Loginuserlistcollection').deleteOne({
    id:request.query.id
   });
   response.json("Delete Successfully");
})