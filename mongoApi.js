const mongoose = require('mongoose');

    // mongoose have some problem with localhost so use 127.0.0.1
     mongoose.connect("mongodb://127.0.0.1:27017/e-com");

    console.log('Connected to MongoDB');
    
    const ProductSchema = new mongoose.Schema({
        name: String,
        brand :String,
        price: Number,
        category: String
    });

    const saveInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    
    let data = new ProductsModel({
        name: 'm8',
        brand :'redmi',
        price: 10000,
        category: "mobile"
    });
    let result = await data.save();
    
    console.log(result);
};
// saveInDB();

const UpdateInDB = async()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        {name:'max 4 pro'},
        {$set:{
            price: 9999,
           
        }}
         
    )
    console.log(data);
}
// UpdateInDB();

const DeleteInDB = async()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.deleteOne(
       {
        name:"nokia1"
       }
    
    )
    console.log(data);

}

// DeleteInDB();

const FindInDB = async()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.find();
    console.log(data);

}
FindInDB();


// --------------------------------------------------------------------------------------------------------------------
// const mongoose = require('mongoose');

// const main = async () => {
//     // mongoose have some problem with localhost so use 127.0.0.1
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

//     console.log('Connected to MongoDB');
    
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         brand :String,
//         price: Number,
//         category: String
//     });

//     const ProductsModel = mongoose.model('products', ProductSchema);
    
//     let data = new ProductsModel({
//         name: 'm8',
//         brand :'redmi',
//         price: 10000,
//         category: "mobile"
//     });
//     let result = await data.save();
    
//     console.log(result);
// };

// main();




// =============================================================================================================================
// mongoose package use 

// const mongoose = require('mongoose');

// const main = async () => {
//     // mongoose have some problem with localhost so use 127.0.0.1
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

//     console.log('Connected to MongoDB');
    
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//     });

//     const ProductsModel = mongoose.model('products', ProductSchema);
    
//     let data = new ProductsModel({ name: 'm8' });
//     let result = await data.save();
    
//     console.log(result);
// };

// main();
