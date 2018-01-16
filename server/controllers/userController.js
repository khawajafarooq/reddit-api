import db from './../models';

const userController = {};

userController.post = (req, res) => {
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

  const user = new db.User({
    username,
    password
  });

  // save it
  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser,
    });
  }).catch((err) => {
    res.status(500).json({
      message: err,
    });
  });
};

export default userController;
