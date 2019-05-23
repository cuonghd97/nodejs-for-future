const express = require("express")
const authControllers = require("../controllers/auth.controllers")

const router = express.Router()

router.get("/login", authControllers.login)
router.post("/login", authControllers.postLogin)

module.exports = router