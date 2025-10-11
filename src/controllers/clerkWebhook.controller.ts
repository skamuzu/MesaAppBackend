import { Request, Response } from "express";
import { Webhook } from "svix";
import { ClerkWebhookService } from "../services/clerkWebhook.service";
import { ClerkWebhookEvent } from "../interfaces/ClerkWebhookEvent";

export class ClerkWebhookController {
  static async UserCreateWebhook(req: Request, res: Response) {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

    let evt: ClerkWebhookEvent;
    try {
      evt = wh.verify(req.body, {
        "svix-id": req.headers["svix-id"] as string,
        "svix-timestamp": req.headers["svix-timestamp"] as string,
        "svix-signature": req.headers["svix-signature"] as string,
      }) as ClerkWebhookEvent;
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return res.status(400).send("Invalid webhook");
    }

    const {type, data} = evt;

    try {
      if (type === "user.created") {
        await ClerkWebhookService.createUserFromClerk(data);
      }
      res.status(200).send("OK");
    } catch (error) {
      console.error("Webhook handling error:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}
