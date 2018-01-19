import express from 'express';
import verifyToken from './../helpers/verifyToken';

// Controller imports
import controller from './../controllers';

const routes = express();

// Basic Routes
routes.get('/', controller.Welcome.get);

// User Routes
routes.post('/register', controller.User.register);
routes.post('/login', controller.User.login);
routes.post('/logout', controller.User.logout);

// Post Routes
routes.post('/post', verifyToken, controller.Post.post);
routes.get('/posts', verifyToken, controller.Post.getAll);

// Comment Routes
routes.post('/comment', verifyToken, controller.Comment.post);

export default routes;
