import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000
const app = express()
const __dirname = path.resolve();

app.use(cors())

app.get("/api/healthcheck", (req, res) => {
    res.json({status: "Healthy"})
});

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"))
})

app.listen(PORT, () => {
    console.log("app started on port: ", PORT)
})