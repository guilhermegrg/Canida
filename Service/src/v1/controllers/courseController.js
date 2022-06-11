const courseService = require("../services/courseService");


const getAllCourses = (req, res) => {
    try {
        const courseList = courseService.getAllCourses();

        res.send({ status: "OK", data: courseList });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleCourseById = (req, res) => {

    const {
        params: { courseId },
    } = req;


    if (!courseId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No id given as parameter to get a Course",
                },
            });
        return;
    }

    try {
        //console.log("ID: ", courseId);

        const course = courseService.getSingleCourseById(courseId);

        //console.log("ID: ", course);

        res.send({ status: "OK", data: course });

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleCourseByName = (req, res) => {

    const {
        params: { courseName },
    } = req;

    if (!courseName) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No Name given as parameter to get a Course",
                },
            });
        return;
    }

    //console.log("name: ", courseName);

    try {
        const course = courseService.getSingleCourseByName(courseName);

        res.send({ status: "OK", data: course });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }

};


module.exports = {
    getAllCourses,
    getSingleCourseById,
    getSingleCourseByName
};