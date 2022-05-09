const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;
const path = require("path");
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
      filename: path.join(__dirname, "../logs/usuario.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "../logs/usuario-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
