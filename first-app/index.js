let express = require("express")
let app = express()

let port = 3000

app.set("view engine", "pug")
app.set("views", "./views")

let bodyParser = require("body-parser")
let multer = require("multer")
let upload = multer()

let users = [
    { name: 'name 1', id: 1 },
    { name: 'nhung 2', id: 2 },
    { name: 'cuong 3', id: 3 }
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index", {
        name: "cuong"
    })
})

app.get("/users", (req, res) => {
    res.render('users/index', {
        users: users
    })
})

app.get("/users/search", (req, res) => {
    let q = req.query.q
    let match_users = users.filter(user => user.name.indexOf(q) >= 0)
    console.log(req.query)
    res.render("users/index", {
        users: match_users
    })
})

app.get("/users/create", (req, res) => {
    res.render("users/create")
})

app.post("/users/create", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.redirect("/users")
})

app.listen(port, () => {
    console.log(`App run on port ${port}`)
})