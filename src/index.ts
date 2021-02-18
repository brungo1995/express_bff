import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from 'cors';
import artistRoutes from "./routes/artist"


const PORT = process.env.PORT || 8000;

export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/", artistRoutes);



if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
}

// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });
