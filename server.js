const express = require("express")
const cors = require("cors")()
const pgp = require('pg-promise')()
const app = express()
app.use(cors)
app.get("/persons/:id", async (req, res, next) => {
    const id = parseInt(req.params["id"])
    const db = pgp(`${process.env.DB_CONN}`)
    try {
        const data = await db.one(`
            SELECT id, name, bday 
            FROM person 
            WHERE id = $1`, id)
        res.json(data)
    } catch (error) {
        return next(error)
    }
})
app.listen(process.env.PORT || 8080)