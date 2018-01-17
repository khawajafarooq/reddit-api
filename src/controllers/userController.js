import passport from 'passport';
import log from '../helpers/log';
import '../helpers/passport-strategies';
import { ServerError } from '../helpers/server';

const userController = {};

userController.register = (req, res, next) => {

  const { username, password } = req.body;

  // validation
  req.check('username', 'Username is required.').notEmpty();
  req.check('password', 'Password is required.').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    res.status(500).send({
      error: errors
    });
    return;
  }

  passport.authenticate('register', (error, user, info) => {

    if (error) {
      res.status(500).json({
        message: error,
      });
    }

    if (!user) {
      res.status(400).json({
        message: info,
      });
    } else {
      res.status(200).json({
        success: true,
        data: user,
      });
    }
  })(req, res, next);
}

userController.login = (req, res, next) => {

  passport.authenticate('login', (error, user, info) => {

    if (error) {
      res.status(500).json({
        message: error,
      });
    }

    if (!user) {
      res.status(400).json({
        message: info,
      });
    } else {
      res.status(200).json({
        success: true,
        authoToken: user,
      });
    }
  })(req, res, next);
}

export default userController;
