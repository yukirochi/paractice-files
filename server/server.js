import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

const dbURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbURI);
const db = client.db("user");
/*const getdat = async () => {
  try {
    await client.connect();
    

    const data = await db.collection("blog").findOne({
      author: "spongebob",
    });

    if (data) {
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};*/

app.post("/getsign", async (req, res) => {
  let { name, gmail, password } = req.body;

  try {
    await client.connect();
    const verify = await db.collection("users").findOne({
      name: name,
    });

    if (verify) {
      res.json({ msg: "user already exist" });
    } else {
      db.collection("users").insertOne({
        name: name,
        gmail: gmail,
        password: password,
      });
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/getlog", async (req, res) => {
  let { name, password } = req.body;

  try {
    await client.connect();
    const verify = await db.collection("users").findOne({
      name: name,
      password: password,
    });

    if(!verify){
      res.json({
        msg: "wrong password"
      })
    }else{
      res.json({
        msg:"logged in successful"
      })
    }

    
  } catch (error) {
    console.error(error);
  }
});

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ var: "hello" });
});
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
