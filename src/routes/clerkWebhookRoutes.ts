import express from "express";
import { ClerkWebhookController } from "../controllers/clerkWebhook.controller";

const clerkRouter = express.Router();
clerkRouter.post("/users",express.raw({type: "application/json"}),ClerkWebhookController.UserCreateWebhook)

export default clerkRouter;