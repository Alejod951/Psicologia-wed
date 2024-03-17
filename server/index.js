const { server } = require("./scr/server.js");
const { conn } = require("./scr/db.js");
require("dotenv").config();
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    console.log(`El valor de PORT es: ${PORT}`);

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
