const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");

// get all  saved words
router.get("/", wordController.getWords);

// create a new word
router.post("/", wordController.createWord);

// delete a wrd
router.delete("/:_id", wordController.deleteWord);

module.exports = router;
