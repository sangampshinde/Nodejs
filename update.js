const dbConnect = require('./mongodb');

const updateData = async ()=>{
let data = await dbConnect();

// this update first spotted record
// let result =  await data.updateOne(
//     { name:"max 1"},
//     {$set:{price:8000,brand:'redmi'}}
// )


// this is update all spotted record matching condition
let result =  await data.updateMany(
    { name:"max 1"},
    {$set:{price:8000,brand:'redmi'}}
)
console.log(result);

console.log(result);

}




updateData();
