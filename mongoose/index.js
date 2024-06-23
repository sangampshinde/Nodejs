const express = require('express');
require('./config');
const Products = require('./product');

 const app = express();
 app.use(express.json());


 app.post('/create', async (req,res)=>{
    let data = new Products(req.body); 
    let result = await data.save();
    res.send(result);
    // console.log(req.body);
    // res.send('Done')
 });

 app.get('/list',async (req,res)=>{
   let data =  await Products.find()
   res.send(data)

 })


app.delete('/delete/:_id', async (req, res) => {
  console.log(req.params);
  let data = await Products.deleteOne({ _id: req.params._id });
  res.send(data);
  
});

app.put('/update/:_id', async (req, res) => {
  console.log(req.params);
  let data = await Products.updateOne(
    req.params,
    {
      $set: req.body
    }
  );
  res.send(data);
});





 app.listen(5000);
