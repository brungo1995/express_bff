import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import testRoutes from "./routes/test"
import artistRoutes from "./routes/artist"


const PORT = process.env.PORT || 8000;

const app: Application = express();


app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static("public"));

// routes
app.use("/", testRoutes);
app.use("/", artistRoutes);

app.use("/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json"
    }
  }))

// app.use(Router)

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});