import dotenv from "dotenv";
dotenv.config({quiet: true, debug: true});
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import clerkRouter from "./routes/clerkWebhookRoutes";
import { courseRouter } from "./routes/course.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use('/clerk',express.raw({"type": "application/json"}) , clerkRouter)
app.use('/courses', courseRouter)
app.use(clerkMiddleware());

app.listen(port,() => {
    console.log(`Server running at port ${port}`)
});

export default app;
