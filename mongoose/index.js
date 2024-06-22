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



 app.listen(5000);
