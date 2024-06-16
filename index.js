// use differnt file to manage connection to mangodb
const dbConnect = require('./mongodb')


// method-2 to handle promises
const main = async()=>{
    // console.log('main function called');

    let data = await dbConnect();
    data = await  data.find().toArray();
    console.log(data)
}
main();


// --------------------------------------------------------

// // use differnt file to manage connection to mangodb
// const dbConnect = require('./mongodb')

// // method-1 to handle promises
// // dbConnect().then((res)=>{
// //     // console.log(resp.find().toArray())
// //     res.find().toArray().then((data)=>{
// //         console.log(data)
// //     })

// // })

// // console.log(dbConnect());

// // method-2 to handle promises
// const main = async()=>{
//     // console.log('main function called');

//     let data = await dbConnect();
//     data = await  data.find().toArray();
//     console.log(data)
// }
// main();


// --------------------------------------------------------------------
// // manage promisess return by database /read data from manogo db
// const {MongoClient} = require('mongodb');
// // or
// // const MongoClient = require('mongodb').MongoClient;
// const url ='mongodb://127.0.0.1:27017/'; //localhost=127.0.0.1
// const database ='e-com'


// const client = new MongoClient(url);

// async function dbConnect(){
     
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
   
// }

// // method-1 to handle promises
// // dbConnect().then((res)=>{
// //     // console.log(resp.find().toArray())
// //     res.find().toArray().then((data)=>{
// //         console.log(data)
// //     })

// // })

// // console.log(dbConnect());

// // method-2 to handle promises
// const main = async()=>{
//     // console.log('main function called');

//     let data = await dbConnect();
//     data = await  data.find().toArray();
//     console.log(data)
// }
// main();


// --------------------

// conntection to mongodb
// const {MongoClient} = require('mongodb');
// // or
// // const MongoClient = require('mongodb').MongoClient;
// const url ='mongodb://127.0.0.1:27017/'; //localhost=127.0.0.1
// const database ='e-com'


// const client = new MongoClient(url);

// async function getData(){
     
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection =db.collection('products');
//     let response = await collection.find({name:'samsung g'}).toArray()
//     // /let response = await collection.find({name:'samsung g'}).toArray()
//     console.log(response)
// }

// getData();



// ---------------------------------------------

// const express = require('express');
// const reqFilter = require('./middleware');
// const  route = express.Router();
// const app =express();



// // app.use(reqFilter);
// route.use(reqFilter);


// app.get('/',(req,res)=>{
//     res.send("Welcome to Home Page");
// })

// app.get('/users',(req,res)=>{
//     res.send("Welcome to User Page");
// })

// route.get('/about',(req,res)=>{
//     res.send("Welcome to About Page");
// })

// route.get('/contact',(req,res)=>{
//     res.send("Welcome to Contact Page");
// })

// app.use('/',route)

// app.listen(2000);

// ---------------------------


// // middleware
// // types
// // use with routes
// const express = require('express');
// const app =express();

// const reqFilter =(req,res,next)=>{
//     console.log('reqFilter');
//     if(!req.query.age){
//         res.send('please enter your age')
//     }else if(req.query.age<18){
//         res.send('You can not acesss this page')
//     }
//     else{
//         next();
//     }
    
// }

// app.use(reqFilter);


// app.get('/',(req,res)=>{
//     res.send("Welcome to Home Page");
// })

// app.get('/users',(req,res)=>{
//     res.send("Welcome to User Page");
// })

// app.listen(2000);



// -------------------------------


// // template pages 
// // ejs
// // dynamic pages
// // dynamic routing

// const express = require('express');
// const path = require('path');


// const PublicPath =path.join(__dirname,'public')
// // console.log(PublicPath);

//  const app = express();
//  app.set('view engine','ejs');


//     app.get('',(_,res)=>{
//         res.sendFile(`${PublicPath}/index.html`);
//     })

//     app.get('/profile',(_,res)=>{
//         const user ={
//             name:'anil sidhu',
//             email:'anil@gmail.com',
//             city:'noida',
//             skills:['php','js','C++','node','react']

//         }
//         res.render('profile',{user});
//     })

//     app.get('/login',(_,res)=>{
        
//         res.render('login');
//     })

//     app.get('/about',(_,res)=>{
//         res.sendFile(`${PublicPath}/about.html`);
//     });

//     app.get('/home',(_,res)=>{
//         res.sendFile(`${PublicPath}/home.html`);
//     });

//     app.get('/help',(_,res)=>{
//         res.sendFile(`${PublicPath}/help.html`);
//     });

//     //when you use star and assign file it reditect yo for any unknown url to that page
//     app.get('*',(_,res)=>{
//         res.sendFile(`${PublicPath}/page404.html`);
//     });


//     app.listen(2000);

    //----------------------------




// remove file extension and 404 page etc get file send
// const express = require('express');
// const path = require('path');

// const PublicPath=path.join(__dirname,'public');

// // console.log(PublicPath)

// const app=express();

// // make req as _
// app.get('',(_,res)=>{
//     res.sendFile(`${PublicPath}/index.html`);
// })

// app.get('/about',(_,res)=>{
//     res.sendFile(`${PublicPath}/about.html`);
// });

// app.get('/home',(_,res)=>{
//     res.sendFile(`${PublicPath}/home.html`);
// });

// app.get('/help',(_,res)=>{
//     res.sendFile(`${PublicPath}/help.html`);
// });

// //when you use star and assign file it reditect yo for any unknown url to that page

// app.get('*',(_,res)=>{
//     res.sendFile(`${PublicPath}/page404.html`);
// });


// app.listen(2000);
// ---------------------------





//Create html static pages and load

// const express = require('express');
// const path = require('path');

// const app = express();
// const PublicPath = path.join(__dirname,'public')

// app.use(express.static(PublicPath))

// // console.log(PublicPath);
// // console.log(__dirname);


// app.listen(2000); 
//-----------------------



// // create pages using express 
// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
   
//     res.send(`<h1>HOME PAGE</h1>
//     <a href='/about'>About page</a>
//     `);
// });

// app.get('/about', (req, res) => {
//     res.send(`
//     <input type='text' placeholder='Username' value='${req.query.name}'/>
//     <button>Click Me</button>
//     <a href='/'>Home page</a>
//     `);
// });

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             'name':'anil',
//             'email':'anil@gmail.com'
//         },
//         {
//             'name':'tony',
//             'email':'tony@gmail.com'
//         },
//         {
//             'name':'peter',
//             'email':'peter@gmail.com'
//         }
//     ]);
// });
 
// app.listen(2000);

// ------------------------










// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
//     console.log(req.query.name);//http://localhost:2000/?name=anil
//     res.send(`HOME PAGE `+ req.query.name);
// });

// app.get('/about', (req, res) => {
//     res.send(`ABOUT PAGE`);
// });

// app.get('/help', (req, res) => {
//     res.send(`HELP PAGE`);
// });
 
// app.listen(2000);



// -----------------------


// let a=20;
// let b=0;

// // setTimeout(()=>{
// //     b=30;
// // },2000);

// let watingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // b=30;
//         resolve(30);

//     },2000);

// })

// watingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// })

// // console.log(a+b);



// crud operation with files

// const { error } = require('console');
// const fs =require('fs');
// const path =require('path');
// const dirPath = path.join(__dirname,`crud`);
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'apple is fruite');

// fs.readFile(filePath,'utf-8',(error,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,'and file name is apple.txt',(error)=>{
//     if(!error){
//         console.log(`file is upadated`);
//     }
//     else{
//         console.log(error);
//     }
//     }
// );


// fs.rename(filePath,`${dirPath}/textfile.txt`,(error)=>{
//     if(!error){
//         console.log(`file name renamed`);
//     }
//     else{
//         console.log(error);
//     }
// });

// fs.unlinkSync(`${dirPath}/textfile.txt`);



























// const fs = require('fs');
// const path =require('path');
// const { clearScreenDown } = require('readline');
// const dirPath =path.join(__dirname,'files');
// console.log(dirPath);

// for(i=0;i<4;i++)
// {
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,`this my fruite named apple${i}`);
// }

// fs.readdir(dirPath,(error,item)=>{
//     // console.log(item);
//     item.forEach((file)=>{
//         console.log(file);
//     })


// });


























// const fs = require('fs');
// const input = process.argv;

// fs.writeFileSync(input[2],input[3]);





// // API create simple

// const http = require('http');
// const data =require('./data');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();   
// }).listen(5000);
