import express from 'express';
import * as controller from '../controller/control';
import auth from '../auth';

const router = express.Router();
router.get('/get', auth, controller.getPost);

router.post('/post', auth, controller.postPost);

router.put('/update/:postId', auth, controller.updatePost);

router.delete('/delete/:postId', auth, controller.deletePost);

router.get('/sort' ,auth ,controller.sortPosts);

router.get('/getPinned/:value' , auth, controller.gettingPosts);

export default router;