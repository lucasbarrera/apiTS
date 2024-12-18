import express from "express";
import diariesRouter from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  //agragando un guion bajo antes del parametro TS ignonara el parametro
  console.log("someone pinged here!");
  res.send("pong");
});

app.use("/api/diaries", diariesRouter);
app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
