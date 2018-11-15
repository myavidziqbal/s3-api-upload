require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const users = require("./routes/users");

app.use(cors());

app.use("/api/users", users);

app.listen(process.env.PORT, () => console.log(process.env.PORT));
