const DB = require("./fakeDB.js");

/**
 * @openapi
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 1234
 *         name: 
 *           type: string
 *           example: Guilherme Gomes  
 */

const getTeachers = () => {
  return DB.data.teachers;
};

const getTeacherById = (teacherId) => {

  const teacher = DB.data.teachers.find((el) => el.id == teacherId);
  //console.log("get teacher: ", DB.teachers, teacherId, teacher);

  if (!teacher) {

    throw {
      status: 404,
      message: "Can't find Teacher with id: " + teacherId,
    };
  }
  return teacher;
};

const getTeacherByName = (teacherName) => {

  const teacher = DB.data.teachers.find((el) => el.name == teacherName);

  //console.log("get teacher: ", DB.teachers, teacherName, teacher);

  if (!teacher) {

    throw {
      status: 404,
      message: "Can't find Teacher with name: " + teacherName,
    };
  }
  return teacher;

};


module.exports = { getTeachers, getTeacherById, getTeacherByName };