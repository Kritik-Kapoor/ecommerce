import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/user", userRouter);

app.use(errorHandler);

export default app;
