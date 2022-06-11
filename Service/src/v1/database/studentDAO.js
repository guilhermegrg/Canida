const DB = require("./fakeDB.js");

/**
 * @openapi
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 4321
 *         name: 
 *           type: string
 *           example: José Nogueira  
 */

const getStudents = () => {
  return DB.data.students;
};

const getStudentById = (studentId) => {

  const student = DB.data.students.find((el) => el.id == studentId);
  //console.log("get student: ", DB.data.students, studentId, student);

  if (!student) {

    throw {
      status: 404,
      message: "Can't find Student with id: " + studentId,
    };
  }
  return student;
};

const getStudentByName = (studentName) => {

  const student = DB.data.students.find((el) => el.name == studentName);

  //console.log("get student: ", DB.data.students, studentName, student);

  if (!student) {

    throw {
      status: 404,
      message: "Can't find Student with name: " + studentName,
    };
  }
  return student;

};


module.exports = { getStudents, getStudentById, getStudentByName };