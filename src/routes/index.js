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
routes.post('/post', controller.Post.post);
routes.get('/posts', controller.Post.getAll);

// Comment Routes
routes.post('/comment', controller.Comment.post);

export default routes;
