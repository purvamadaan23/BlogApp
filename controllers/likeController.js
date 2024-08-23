const Post=require("../models/postModel");
const Like=require('../models/likeModel');

exports.likePost=async (req,res)=>{
    try{
const{post,user}=req.body;

const like=new Like({post,user});
const saveLike=await like.save();


const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes: saveLike._id}},{new:true}).popule("likes").exec();
response.status(200).json({
    success:true,
    post:updatePost

})
}
catch(error){
    response.status(500).json({
        success:false,
       message:error.message
    
    })
}

}

exports.unlikePost=async (req,res)=>{
    try{
const{post,user}=req.body;

const like=new Like({post,user});
const deleteLike=await like.findOneByIdAndDelete({post:post,_id:like._id});


const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes: deleteLike._id}},{new:true}).populate("likes").exec();
response.status(200).json({
    success:true,
    post:updatePost

})
}
catch(error){
    response.status(500).json({
        success:false,
       message:error.message
    
    })
}

}