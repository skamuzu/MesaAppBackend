import db from "../config/db";
import { users } from "../models/users";
import { eq } from "drizzle-orm";

export class UserService {
  static async getAllUsers() {
    return await db.select().from(users);
  }

  static async getUserById(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id));
  }


    
  }
}
