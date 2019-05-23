const shortid = require("shortid")
const users = require("../db")

module.exports.users = (req, res) => {
  res.render("users/index")
}

module.exports.lists = (req, res) => {
  res.render("users/list.pug")
}