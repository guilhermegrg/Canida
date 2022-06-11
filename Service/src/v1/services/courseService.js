const courseDAO = require("../database/courseDAO");


const getAllCourses = () => {
    const courses = courseDAO.getCourses();
    return courses;
};

const getSingleCourseById = (courseId) => {
    return courseDAO.getCourseById(courseId);
};

const getSingleCourseByName = (courseName) => {
    return courseDAO.getCourseByName(courseName);
};

//additional services


module.exports = {
    getAllCourses,
    getSingleCourseById,
    getSingleCourseByName
};