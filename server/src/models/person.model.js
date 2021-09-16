const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = new Schema(
  {
    name: { type: String, required: true },
    cedula: { type: String, required: true },
    profession: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Person", personSchema);
