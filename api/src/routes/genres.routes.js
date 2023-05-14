const express = require("express");
const router = express.Router();
const getGenHandler = require('../handlers/getGenders.handler')

router.get("/", getGenHandler); 

module.exports = router;