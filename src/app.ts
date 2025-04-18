import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";

const app: Application = express();

// middlewares
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Bike Servicing Management System....");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
