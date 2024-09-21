const express = require("express");
const router = express.Router();
const { homepage } = require("../controllers/indexcontroller");

router.get("/", homepage);

module.exports = router;