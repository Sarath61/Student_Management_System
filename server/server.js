const app = require("./app");
const mongoose = require("mongoose");

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Servering is Runnig....");
});
