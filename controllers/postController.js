const Post=require("../models/postModel");

exports.createPost=async (req,res)=>{
    try{
        const{title,body}=req.body;

        // if (!title || !body) {
        //     return res.status(400).json({
        //       error: "Title and body are required."
        //     });
        //   }
        const post=new Post({
            title,body
        });
        const savePost=await post.save();
         res.json({
            post:savePost,
        });
    
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating post"
        });

    }
}

exports.getAllPosts=async (req,res)=>{
    try{
        const posts=await Post.find().populate("likes").populate("comments").exec();        
        
        return res.status(200).json({
          post:posts,
        });
    
    }
    catch(error){
        return res.status(400).json({
            error:"Error while fetching posts"
        });

    }
}

