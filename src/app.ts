import * as dotenv from "dotenv";
dotenv.config({quiet: true, debug: true});
import express, { Request, Response } from "express";
import { clerkMiddleware } from "@clerk/express";
import { getAuth, clerkClient, requireAuth } from "@clerk/express";
import clerkRouter from "./routes/clerkWebhookRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use('/clerk',express.raw({"type": "application/json"}) , clerkRouter)
app.use(clerkMiddleware());

app.listen(port,() => {
    console.log(`Server running at port ${port}`)
});

export default app;
