import express from 'express';
import {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost
} from '../controllers/api-post-controller.js';

const router = express.Router();

// Get All Posts
router.get('/api/posts', getPosts);
// Add New Post
router.post('/api/post', addPost);
// Get Post by ID
router.get('/api/post/:id', getPost);
// Delete Post by ID
router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);

export default router;
