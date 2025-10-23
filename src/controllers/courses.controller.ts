import { Request, Response } from "express";
import { CourseService } from "../services/course.service";

export class CourseController {
  static createCourse = async (req: Request, res: Response) => {
    try {
      const course = await CourseService.createCourse(req.body);
      return res.status(201).json({
        data: course,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Failed to create course",
      });
    }
  };

  static getCourses = async (req: Request, res: Response) => {
    try {
      const courses = await CourseService.getCourses();
      return res.status(200).json(courses);
    } catch (err) {
      return res.status(500).json({
        message: "Failed to get courses",
      });
    }
  };

  static getCourseById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const course = await CourseService.getCourseById(Number(id));

      if (!course || course.length === 0) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      return res.status(200).json(
        course[0]
      );
    } catch (err) {
      return res.status(500).json({
        message: "Failed to get course",
      });
    }
  };

  static updateCourse = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedCourse = await CourseService.updateCourse(
        Number(id),
        req.body
      );

       if (!updatedCourse || updatedCourse.length === 0) {
        return res.status(404).json({
          message: "Course not found",
        });

        return res.status(200).json(
            updatedCourse
        )
      }
    } catch (err) {
      return res.status(500).json({
        message: "Failed to update course",
      });
    }
  };

  static deleteCourse = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deletedCourse = await CourseService.deleteCourse(Number(id));

         if (!deletedCourse || deletedCourse.length === 0) {
        return res.status(404).json({
          message: "Course not found",
        });

        return res.status(200).json(
            deletedCourse
        )
      }
    }

    catch (err) {
        return res.status(500).json({
           mesage: "Failed to delete course"
        })
    }
  }
}


