const server = require("./src/app");
const { conn } = require("./src/db");
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    conn.sync({ alter: true });
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});