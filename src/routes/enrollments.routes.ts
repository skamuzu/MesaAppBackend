import { Router } from "express";
import { EnrollmentController } from "../controllers/enrollments.controller";
import { validate } from "../middlewares/validate";
import { enrollmentCreateSchema } from "../schemas/enrollments.schema";

const enrollmentRouter = Router();

enrollmentRouter.get("/", EnrollmentController.getAll);
enrollmentRouter.get("/user/:id",EnrollmentController.getByUser);
enrollmentRouter.get("/course/:id", EnrollmentController.getByCourse);
enrollmentRouter.post("/", validate(enrollmentCreateSchema),EnrollmentController.create);

export default enrollmentRouter;