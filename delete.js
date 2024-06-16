const dbConnet = require('./mongodb');

const deleteData= async()=>{

    // console.log('function called');
    let data =  await dbConnet();
    
    // let result =  await data.deleteOne({name:"max 1"})

    let result =  await data.deleteMany({name:"max 1"})

    // console.log(data);
    console.log(result);



}
deleteData();