import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 1000;

app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Login Page");
    console.log("run") // Just sending a simple response as a placeholder
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  