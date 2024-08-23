const Post=require("../models/postModel");
const Comment=require('../models/commentModel');

exports.createComment=async (req,res)=>{
    try{
const{post,user,body}=req.body;
const comment=new Comment({post,user,body});
const saveComment=await comment.save();


const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments: saveComment._id}},{new:true}).populate("comments").exec();
res.status(200).json({
    success:true,
    post:updatePost

})
}
catch(error){
    res.status(500).json({
        success:false,
       message:error.message
    
    })
}

}