const express=require("express");
const app=express();
const users = require("./Route/users");
const posts = require("./Route/post");
const session = require("express-session");
const flash = require("connect-flash");
const path= require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

const sessionOptions= {
    secret: "mysupersecretstring",
    resave:false,
    saveUninitialized:true
}

app.use(session(sessionOptions));
app.use(flash());

app.get("/register",(req,res)=>{
    
    let{name="anonymous"}=req.query;
    req.session.name=name;

    if(name === "anonymous"){
        req.flash("error","user not register");
    }
    else
    {
        req.flash("success","user register successfully");
    }
   
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    // res.send(` Hello , ${req.session.name}`);
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.render("page.ejs",{ name : req.session.name })
})
    






app.listen(3000,()=>{
    console.log("server is listining on the port 3000");
});