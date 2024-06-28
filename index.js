const express = require('express');
const app = express();
const cors= require('cors');
const { MongoClient } =require('mongodb');
app.use(cors());
app.use(express.json());
let user = []
let db='';

async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }
 
 
app.get('/users',async function(req,res){
    let user = await db.collection('user').find({}).toArray();
    res.json(user)
})

app.post('/register', async function(req, res) {
    let output = await db.collection('user').insertOne(req.body);
    console.log(req.body);
})
app.post('/login',async function(req,res){
    console.log(req.body);
    let user = await db.collection('user').find({'email': req.body.email}).toArray();
    if(user.length == 0) {
        return res.json("email not found")
    } else {
        if(user[0].password == req.body.password) {
            return res.json(user[0]);
        }
        return res.json("password incorrect")

    }
    // for(let i=0;i<user.length;i++){
    //     if(user[i].password==req.body.email){
    //         if(user[i].password=req.body.password){
    //             return res.json(user[i]);
    //         }
    //     }
    // }
    // return res.json("email not found")
})
app.listen(777,function(){
    console.log('server is ready and listening on port');
    mongoConnect();
})