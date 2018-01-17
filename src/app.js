// Dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import validator from 'express-validator';
import passport from 'passport';
import routes from './routes';

// Mongodb connection
mongoose.connect('mongodb://localhost:27017/reddit', () => {
  console.log('Connected to mongodb...');
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());

// Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', routes);

export default app;