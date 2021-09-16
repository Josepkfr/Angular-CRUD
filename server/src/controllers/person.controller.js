const Person = require("../models/person.model");

const personController = {
  async getPeople(req, res, next) {
    const person = await Person.find();
    res.json(person);
  },

  async createPerson(req, res, next) {
    const person = new Person({
      name: req.body.name,
      cedula: req.body.cedula,
      profession: req.body.profession,
    });
    await person.save();
    res.json({ status: "saved" });
  },

  async getPerson(req, res, next) {
    const { id } = req.params;
    const person = await Person.findById(id);
    res.json(person);
  },

  async editPerson(req, res, next) {
    const { id } = req.params;
    await Person.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "updated" });
  },

  async removePerson(req, res, next) {
    const { id } = req.params;
    await Person.findByIdAndRemove(id);
    res.json({ status: "deleted" });
  },
};

module.exports = personController;
