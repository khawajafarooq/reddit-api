import passport from 'passport';
import log from '../helpers/log';
import '../helpers/passport-strategies';
import uuid from 'node-uuid';
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

  passport.authenticate('login', async (error, user, info) => {

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

      req.session.key = uuid.v1();

      res.status(200).json({
        success: true,
        authToken: req.sessionID,
      });
    }
  })(req, res, next);
}

userController.logout = (req, res) => {

  log.dev(`token: ` + req.headers.token);
  log.dev(`session ID: ` + req.sessionID);
  if (req.session.key == req.headers.token) {
    log.dev(`Logging out session: ` + req.session.token);
  } else {
    log.dev(`Session not validated`);
  }
  req.session.destroy(function(err){
          if(err){
            res.status(400).json({
              message: err,
            });
          } else {
            res.status(200).json({
              success: true,
              message: 'Successfully logged out.',
            });
          }
      });
}

export default userController;
