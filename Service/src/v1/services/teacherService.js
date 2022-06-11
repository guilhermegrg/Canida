const teacherDAO = require("../database/teacherDAO");


const getAllTeachers = () => {
    const teachers = teacherDAO.getTeachers();
    return teachers;
};

const getSingleTeacherById = (teacherId) => {
    return teacherDAO.getTeacherById(teacherId);
};

const getSingleTeacherByName = (teacherName) => {
    return teacherDAO.getTeacherByName(teacherName);
};

//additional services

module.exports = {
    getAllTeachers,
    getSingleTeacherById,
    getSingleTeacherByName
};