const {MongoClient} = require('mongodb');
// or
// const MongoClient = require('mongodb').MongoClient;
const url ='mongodb://127.0.0.1:27017/'; //localhost=127.0.0.1
const database ='e-com'


const client = new MongoClient(url);

async function dbConnect(){
     
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
   
}

module.exports = dbConnect;