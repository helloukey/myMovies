require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const tmdbRoutes = require("./routes/tmdb");
const userRoutes = require("./routes/user");
const collectionRoutes = require("./routes/collection");
const userAuthorization = require("./middleware/userAuthorization");

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
app.use("/api", tmdbRoutes)

// routes
app.use("/user", userAuthorization, userRoutes);

// autherizatin middleware
// app.use(userAuthorization);
app.use("/user", collectionRoutes);
