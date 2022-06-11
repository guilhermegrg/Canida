const studentDAO = require("../database/studentDAO");


const getAllStudents = () => {
    const students = studentDAO.getStudents();
    return students;
};

const getSingleStudentById = (studentId) => {
    return studentDAO.getStudentById(studentId);
};

const getSingleStudentByName = (studentName) => {
    return studentDAO.getStudentByName(studentName);
};

//additional services


module.exports = {
    getAllStudents,
    getSingleStudentById,
    getSingleStudentByName
};