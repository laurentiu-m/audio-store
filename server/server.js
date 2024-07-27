require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const sequelize = require("./db");
const path = require("path");

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.FRONT_URL,
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);

// Routes
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();

    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
