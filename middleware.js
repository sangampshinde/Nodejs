module.exports = reqFilter =(req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        res.send('please enter your age')
    }else if(req.query.age<18){
        res.send('You can not acesss this page')
    }
    else{
        next();
    }
    
}