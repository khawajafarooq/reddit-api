import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import log from '../helpers/log';
import User from './../models/user';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
  try {
    const user = await User.findOne({ username }).exec();
    if (!user) {
      return done(null, false, 'username not found.');
    }

    await user.comparePassword(password, user.password, function(err, isMatch) {

      if(err) throw err;

      if(isMatch){
        return done(null, user);
      } else {
        return done(null, false, 'Invalid username or password.');
      }
    });
  } catch (error) {
    return done(error);
  }
}));

passport.use('register', new LocalStrategy({ usernameField: 'username', passReqToCallback: true }, async (req, username, password, done) => {

  const user = await User.findOne({ username }).exec();
  if (user) {
    return done(null, false, 'There is already an account using this username.');
  }

  const newUser = new User();
  newUser.username = username;
  newUser.password = password;

  try {
    const newUserSaved = await newUser.save();
    return done(null, newUserSaved);
  } catch (error) {
    return done(error);
  }
}));

export default passport;
