const { Router } = require('express');

const Videogames = require("./videogames.routes")
const Genres = require("./genres.routes")
const router = Router();

router.use("/videogames",Videogames)
router.use("/genres",Genres)

module.exports = router;