const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());



app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
});   

// PUT request is used to update the data in the database
app.put('/', async(req,res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        // codnition
        {
            name:req.body.name

        },
        // set data
        {
            $set:req.body

        });

    // console.log(req.body)
    res.send({result:'updated'});

})
// here we copy id from mongodb and pest and delete it from db
// http://localhost:2000/665996fc30a4b6b5d5371bdc just like

app.delete('/:id',async(req,res)=>{
    const data =  await dbConnect();
    const result =  await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    console.log(req.params.id)
    res.send(result);

})






app.listen(2000);
