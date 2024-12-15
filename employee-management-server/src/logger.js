const winston = require('winston');
const { format } = require('logform');

const isDev = process.env.NODE_ENV === 'dev';

const logger = winston.createLogger({
    level: process.env.LOGGER_LEVEL,
    transports: [
      new winston.transports.Console({
        silent: false,
        format: format.combine(
          isDev
            ? format.cli({
                colors: {
                  debug: 'cyan',
                  info: 'blue',
                  warn: 'yellow',
                  error: 'red',
                },
              })
            : format(i => i)(),
          isDev ? format.timestamp() : format(i => i)(),
          format.splat(),
          isDev ? format.cli() : format.json(),
        ),
      }),
    ],
  });

module.exports = {
    logger
}

