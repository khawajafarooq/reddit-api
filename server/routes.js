import express from 'express';

// Controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User Routes
routes.post('/signup', userController.post);

// Post Routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

export default routes;
