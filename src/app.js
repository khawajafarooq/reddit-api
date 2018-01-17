// Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import validator from 'express-validator';
import passport from 'passport';
import config from 'config';
import routes from './routes';
import databases from './databases';

// DB connection
databases.mongodb();
const dbSession = databases.redis(session);

// App
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());

// Session
const appSession = session({
  resave: true,
  saveUninitialized: true,
  key: config.get('session.key'),
  secret: config.get('session.secret'),
  store: dbSession,
});
app.use(appSession);

app.use((req, res, next) => {
  if (!req.session) {
    log.error('Session not found (is Redis down?).');
  }
  next();
});

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', routes);

export default app;
