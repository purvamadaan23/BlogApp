const express=require("express");
const router=express.Router();

//import controller
const {createComment}=require("../controllers/commentController");
const {likePost}=require("../controllers/likeController");
const {unlikePost}=require("../controllers/likeController");
const {createPost}=require("../controllers/postController");
const {getAllPosts}=require("../controllers/postController");


router.post('/comments/create',createComment);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);
router.post('/posts/create',createPost);
router.get('/posts/fetch',getAllPosts);

module.exports=router;

