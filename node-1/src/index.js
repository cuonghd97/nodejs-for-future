const express = require("express")
const bodyParser = require("body-parser")


const userRoute = require("./routes/users.routes")
const authRoute = require("./routes/auth.routes")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "pug")
app.set("views", "./src/views")

app.get("/", (req, res) => {
	res.send("Hello world")
})

app.use("/users/", userRoute)
app.use("/auth/", authRoute)

app.listen(8000, () => {
	console.log(`app run on port ${8000}`)
})