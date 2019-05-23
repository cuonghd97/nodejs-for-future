const express = require("express")
const userControllers = require("../controllers/user.controllers")

const router = express.Router()

router.get("/index", userControllers.users)
router.get("/lists", userControllers.lists)

module.exports = router