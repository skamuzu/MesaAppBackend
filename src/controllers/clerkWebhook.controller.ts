import type { Request, Response } from "express";
import { verifyWebhook } from "@clerk/express/webhooks";
import { ClerkWebhookService } from "../services/clerkWebhook.service";
import { ClerkWebhookEvent } from "../interfaces/ClerkWebhookEvent";

export class ClerkWebhookController {
  static async UserCreateWebhook(req: Request, res: Response) {
    try {
      const evt = await verifyWebhook(req, {
        signingSecret: process.env.CLERK_WEBHOOK_SECRET!,
      });
      const eventType = evt.type;

      if (eventType === "user.created") {
        await ClerkWebhookService.createUserFromClerk(evt);
      }

      //@ts-ignore
      res.status(200).send("OK");
    } catch (error) {
      console.error("Webhook handling error:", error);

      //@ts-ignore
      res.status(500).send("Internal Server Error");
    }
  }
}
