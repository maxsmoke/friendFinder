let express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


var PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routes/apiRoutes.js")(app);  //doesnt work and I don't understand why I need it
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });