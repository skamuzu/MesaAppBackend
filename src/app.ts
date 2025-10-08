import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { clerkMiddleware } from "@clerk/express";
import { getAuth, clerkClient, requireAuth } from "@clerk/express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware());

app.get("/protected", requireAuth(), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await clerkClient.users.getUser(userId);
    return res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.listen(port);

export default app;
