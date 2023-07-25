const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");

const app = express();

//Cross-Origin Resource Sharing
app.use(cors());
//Sirve para ver las consultas por consola.
app.use(morgan("dev"));

//Se utiliza para poder comprender los datos en formato JSON.
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//le indicamos la existencia de las rutas.
app.use(mainRouter);

module.exports = app;