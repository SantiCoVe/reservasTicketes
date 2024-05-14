import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import register from "./routes/register";
import auth from "./routes/auth"

dotenv.config();
const app = express().use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.use('/register', register)
app.use('/auth', auth)
app.use('/allTickets', getTickets)

const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (error) => {
    throw new Error(error.message);
});