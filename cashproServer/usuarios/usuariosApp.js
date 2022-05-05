const db = require("../database");
const usuarioServer = require("./usuariosServer");
const config = require("../environments/local");
const cronjobs = require("../cronjobs");

// https://www.nginx.com/blog/nginx-caching-guide/
const connection = db.initConnect();

const usuariosPort = config.usuariosPort;
const usuarioApp = usuarioServer.init(usuariosPort);

usuarioApp.listen(usuariosPort, () => {
  console.log("Server running at: " + usuariosPort);
});

let jobs = cronjobs.usuarioCronJobs();
jobs.forEach((job) => {
  job.start();
});
