const db = require("../database");
const autherver = require("./authServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

// https://www.nginx.com/blog/nginx-caching-guide/
const connection = db.initConnect();

const authPort = config.authPort;
const authApp = autherver.init(authPort);

authApp.listen(authPort, () => {
  console.log("Server running at: " + authPort);
});

let jobs = cronjobs.authCronJobs();
jobs.forEach((job) => {
  job.start();
});
