const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("GET for users");
});

// show users
router.get("/:id",(req,res)=>{
    res.send("GET for users id");
});

//post route
router.post("/",(req,res)=>{
    res.send("post for users");
});

// delete route users
router.delete("/:id",(req,res)=>{
    res.send("delete for users id");
});

module.exports = router;