const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;
app.get("api/start", (req, res) => {
  res.json({ msg: "Welcome to my server" });
});
app.listen(port, () => console.log(`App is listening to the ${port}`));
