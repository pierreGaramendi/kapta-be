import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import productRouter from "./delivery/routers/WorkspacesRouter";
import bodyParser from "body-parser";
import { connectMongoDB } from "./infrastructure/config/mongoConfig";
import userRouter from "./delivery/routers/UserRouter";


dotenv.config();

const app: Application = express();
connectMongoDB();
app.disable("x-powered-by");

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(productRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
