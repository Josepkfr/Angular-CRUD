const mongoose = require("mongoose");

const URI =
  "";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(db.connection.name, "Database is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
