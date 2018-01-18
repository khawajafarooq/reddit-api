import express from 'express';
import verifyToken from './../helpers/verifyToken';

// Controller imports
import basicController from './../controllers/basicController';
import userController from './../controllers/userController';
import postController from './../controllers/postController';
import commentController from './../controllers/commentController';

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User Routes
routes.post('/register', userController.register);
routes.post('/login', userController.login);
routes.post('/logout', userController.logout);

// Post Routes
routes.post('/post', postController.post);
routes.get('/posts', verifyToken, postController.getAll);

// Comment Routes
routes.post('/comment', commentController.post);

export default routes;
