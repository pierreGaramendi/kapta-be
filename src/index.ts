import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectMongoDB } from "./infrastructure/config/mongoConfig";
import userRouter from "./delivery/routers/UserRouter";
import authRouter from "./delivery/routers/AuthRouter";

dotenv.config();

const app: Application = express();
connectMongoDB();
app.disable("x-powered-by");

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(userRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
