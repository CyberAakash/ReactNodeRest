// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")

import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("CyberAakash")
})


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT} ::::::::`);
})