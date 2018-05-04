var app = require("express");

module.exports = function(app) {
  app.get("/", function(req, res) {
    console.log('Route "/" - Serving home page index.html');
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  app.get("/survey", function(request, response) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/home", function(request, response) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
