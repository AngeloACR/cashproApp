const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;
const path = require("path");
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
      filename: path.join(__dirname, "../logs/auth.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "../logs/auth-error.json"),
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
