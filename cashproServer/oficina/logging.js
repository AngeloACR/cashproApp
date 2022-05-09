const { createLogger, format, transports, config } = require("winston");
const { combine, timestamp, prettyPrint } = format;
const path = require('path');
const environment = require("./environments/local");
module.exports.authLogger = createLogger({
  defaultMeta: { component: "auth" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: path.join(__dirname, "./logs/auth.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "./logs/auth-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
module.exports.usuarioLogger = createLogger({
  defaultMeta: { component: "usuario" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: path.join(__dirname, "./logs/usuario.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "./logs/usuario-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});

module.exports.pagosLogger = createLogger({
  defaultMeta: { component: "pagos" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: path.join(__dirname, "./logs/pagos.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "./logs/pagos-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});

module.exports.oficinaLogger = createLogger({
  defaultMeta: { component: "oficina" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: path.join(__dirname, "./logs/oficina.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "./logs/oficina-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
