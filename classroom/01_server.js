const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hi, I am root!");
});

//Index- users route

app.get("/users",(req,res)=>{
    res.send("GET for users");
});

// show users
app.get("/users/:id",(req,res)=>{
    res.send("GET for users id");
});

//post route
app.post("/users",(req,res)=>{
    res.send("post for users");
});

// delete route users
app.delete("/users/:id",(req,res)=>{
    res.send("delete for users id");
});






//posts route

//index
app.get("/posts",(req,res)=>{
    res.send("get for posts");
});


// show users
app.get("/posts/:id",(req,res)=>{
    res.send("get for posts id");
});

//post route
app.post("/posts",(req,res)=>{
    res.send("post for posts route");
});

// delete route users
app.delete("/posts/:id",(req,res)=>{
    res.send("delete for post id");
});
app.listen(3000,()=>{
    console.log("server is listining on the port 3000");
})