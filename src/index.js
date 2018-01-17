import log from './helpers/log';
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  log.info('-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-');
  log.info(`🌐  API listening on port ${PORT}`);
  log.info('-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-');
});
