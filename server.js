const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const PostRoutes = require("./routes/route");
const cors = require("cors");
const app = express();
app.use(cors());
mongoose.set("useFindAndModify", false);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

const port = process.env.PORT || 4000;
app.use("/posts", PostRoutes);
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
