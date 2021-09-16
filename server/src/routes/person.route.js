const router = require("express").Router();

const person = require("../controllers/person.controller");

router.get("/", person.getPeople);

router.post("/", person.createPerson);

router.get("/:id", person.getPerson);

router.put("/:id", person.editPerson);

router.delete("/:id", person.removePerson);

module.exports = router;
