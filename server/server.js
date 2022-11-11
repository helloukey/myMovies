require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const tmdbRoutes = require("./routes/tmdb");
const userRoutes = require("./routes/user");
const collectionRoutes = require("./routes/collection");
const userAuthorization = require("./middleware/userAuthorization");
const path = require('path')

// only when ready to deploy
app.use(express.static("../client/build"));

// middleware
app.use(cors());
app.use(express.json());

// mongoDB initialization
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to mongoDB & listening on port " + process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

// tmdb
app.use("/api", tmdbRoutes);

// User Authorization
app.use("/authorization", userRoutes);

// authorization middleware
app.use(userAuthorization);
app.use("/user", collectionRoutes);

// only when ready to deploy
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'../client', 'build','index.html')));