const express=require("express");
const app=express();

const users = require("./Route/users");
const posts = require("./Route/post");


const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));
//cookies



app.get("/getsignedcookie",(req,res)=>{
    res.cookie("color","red", { signed: true});
    res.send("done!");
});

//verify to signed cookie

app.get("/verify",(req,res)=>{
    console.log(req.cookies);// unsigned cookie peinr hoti haii

    // signed cookie ko print karne ke liye

    console.log(req.signedCookies);
    res.send("verified");
})



app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("madeIn","India");
    res.send("sent you some cookie");
});

app.get("/", (req,res)=>{
    console.dir(req.cookies);
    res.send("Hi, I am root!");
});


app.get("/greet", (req,res)=>{
    let {name="anonymous"}=req.cookies;
    res.send(`Hii ${name}`);
});

// router ko use karo
// users routs access
app.use("/users", users);

// post route access

app.use("/posts",posts);


app.listen(3000,()=>{
    console.log("server is listining on the port 3000");
});