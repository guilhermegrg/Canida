const DB = require("./fakeDB.js");

/**
 * @openapi
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 3333
 *         name: 
 *           type: string
 *           example: Fluid Mechanics  
 *         teacher:
 *           $ref: "#/components/schemas/Teacher"
 *         students:
 *           type: array 
 *           items: 
 *              $ref: "#/components/schemas/Student"
 */

const getCourses = () => {
  return DB.data.courses;
};

const getCourseById = (courseId) => {

  const course = DB.data.courses.find((el) => el.id == courseId);
  //console.log("get student: ", DB.data.courses, courseId, course);

  if (!course) {

    throw {
      status: 404,
      message: "Can't find Course with id: " + courseId,
    };
  }
  return course;
};

const getCourseByName = (courseName) => {

  const course = DB.data.courses.find((el) => el.name == courseName);

  //console.log("get student: ", DB.data.courses, courseName, course);

  if (!course) {

    throw {
      status: 404,
      message: "Can't find Course with name: " + courseName,
    };
  }
  return course;

};


module.exports = { getCourses, getCourseById, getCourseByName };