const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:3001","http://localhost:5174","https://3-d-protfolio-gamma.vercel.app"],
};
app.use(cors(corsOptions));

app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
module.exports = app;
