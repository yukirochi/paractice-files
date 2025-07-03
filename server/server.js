import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
//db url
const dbURI =
  "mongodb+srv://yukirochii:123321@cluster0.k3os4qx.mongodb.net/try?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);

const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ var: "hello" });
});
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
