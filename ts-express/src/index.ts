import express from "express";
import usersRouter from "./routes/usersRouter";

const app = express();

app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running succesfully...");
});
