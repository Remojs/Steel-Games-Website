const express = require("express");
const router = express.Router();
const getGames = require('../handlers/getGame.handlers')
const getById = require('../handlers/getGamebyId.handlers');
const getByName = require("../handlers/getGamebyName.handlers");
const createGameHandler = require ('../handlers/createGame.handler')

router.get("/", getGames);           

router.get("/:idVideogame", getById); 

router.get("/name/:name", getByName);       

router.post("/", createGameHandler)

module.exports = router;