const mongoose = require("mongoose");

const URI =
  "mongodb+srv://JPK:92CzKSlrS80a@cluster0.1brfh.mongodb.net/angular?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(db.connection.name, "Database is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
