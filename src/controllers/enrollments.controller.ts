import { Request, Response } from "express";
import { EnrollmentService } from "../services/enrollment.service";
import { enrollmentCreateSchema } from "../schemas/enrollments.schema";

export class EnrollmentController {
  // GET /enrollments
  static async getAll(req: Request, res: Response) {
    try {
      const enrollments = await EnrollmentService.getEnrollments();
      return res.status(200).json({
        success: true,
        data: enrollments,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch enrollments",
      });
    }
  }

  // GET /enrollments/user/:id
  static async getByUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const enrollments = await EnrollmentService.getEnrollmentsbyUser(id);

      return res.status(200).json({
        success: true,
        data: enrollments,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch user enrollments",
      });
    }
  }

  // GET /enrollments/course/:id
  static async getByCourse(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const enrollments = await EnrollmentService.getEnrollmentsbyCourse(id);

      return res.status(200).json({
        success: true,
        data: enrollments,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch course enrollments",
      });
    }
  }

  // POST /enrollments
  static async create(req: Request, res: Response) {
    try {
     

      const newEnrollment = await EnrollmentService.createEnrollments(req.body);

      return res.status(201).json({
        success: true,
        data: newEnrollment,
      });
    } catch (error: any) {
      console.error(error);

  
      if (error.code === "23505") {
        return res.status(409).json({
          success: false,
          message: "User already enrolled in this course",
        });
      }

      return res.status(500).json({
        success: false,
        message: "Failed to create enrollment",
      });
    }
  }
}
