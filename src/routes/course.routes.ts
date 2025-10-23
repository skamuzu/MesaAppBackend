import { Router } from "express";
import { CourseController } from "../controllers/courses.controller";
import { courseCreateSchema, courseUpdateSchema, courseSelectSchema } from "../schemas/courses.schema";
import { validate } from "../middlewares/validate";

export const courseRouter = Router()

courseRouter.post('/', validate(courseCreateSchema), CourseController.createCourse)
courseRouter.get('/', CourseController.getCourses)
courseRouter.get('/:id', CourseController.getCourseById)
courseRouter.put("/:id", validate(courseUpdateSchema), CourseController.updateCourse)
courseRouter.delete("/:id", validate(courseSelectSchema), CourseController.deleteCourse)