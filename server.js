const express = require("express")
const cors = require("cors")()
const app = express()
app.use(cors)
app.get("/persons/:id", (req, res, next) => {
    if (parseInt(req.params["id"]) !== 1) {
        return next("person not found")
    }
    const data = {
        id: 1,
        name: "Kevin Bateman",
        bday: "1994-10-11"
    }
    res.json(data)
})
app.listen(process.env.PORT || 8080)