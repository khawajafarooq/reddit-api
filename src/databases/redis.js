import config from 'config';
import redis from 'redis';
import connectRedis from 'connect-redis';
import log from './../helpers/log';

module.exports = (Session) => {
  const redisClient = redis.createClient({
    host: config.get('database.session.host'),
    port: config.get('database.session.port'),
    prefix: config.get('database.session.prefix'),
    disableTTL: true,
  });

  redisClient.on('ready',function() {
   log.dev(`Redis is ready`);
  });

  redisClient.on('error',function() {
   log.error(`Error in Redis`);
  });

  const RedisStore = connectRedis(Session);
  return new RedisStore({ client: redisClient });
};
