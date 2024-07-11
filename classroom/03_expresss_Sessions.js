const express=require("express");
const app=express();
const users = require("./Route/users");
const posts = require("./Route/post");

const session = require("express-session");

app.use(session({
    secret: "mysupersecretstring",
    resave:false,
    saveUninitialized:true

}));

app.get("/text",(req,res)=>{
    res.send("text-successful");
});

app.get("/reqcount",(req,res)=>{
    if(req.session.count)
    {
        req.session.count++;
    }
    else
    {
        req.session.count = 1;
    }

    res.send(`You send a request ${req.session.count} times`)
});




app.listen(3000,()=>{
    console.log("server is listining on the port 3000");
});