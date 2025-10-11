import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { clerkMiddleware } from "@clerk/express";
import { getAuth, clerkClient, requireAuth } from "@clerk/express";
import clerkRouter from "./routes/clerkWebhookRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware());
app.use('/clerk', clerkRouter)

app.listen(port);

export default app;
