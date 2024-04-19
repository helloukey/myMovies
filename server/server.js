const app = require("./app");
const mongoose = require("mongoose");

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
