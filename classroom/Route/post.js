const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("get for posts");
});


// show users
router.get("/:id",(req,res)=>{
    res.send("get for posts id");
});

//post route
router.post("/",(req,res)=>{
    res.send("post for posts route");
});

// delete route users
router.delete("/:id",(req,res)=>{
    res.send("delete for post id");
});

module.exports = router;