const teacherService = require("../services/teacherService");


const getAllTeachers = (req, res) => {
    try {
        const teachersList = teacherService.getAllTeachers();

        res.send({ status: "OK", data: teachersList });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleTeacherById = (req, res) => {

    const {
        params: { teacherId },
    } = req;


    if (!teacherId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No id given as parameter to get a Teacher",
                },
            });
        return;
    }

    try {
        //console.log("ID: ", teacherId);

        const teacher = teacherService.getSingleTeacherById(teacherId);

        res.send({ status: "OK", data: teacher });

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleTeacherByName = (req, res) => {

    const {
        params: { teacherName },
    } = req;

    if (!teacherName) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No Name given as parameter to get a Teacher",
                },
            });
        return;
    }

    //console.log("name: ", teacherName);

    try {
        const teacher = teacherService.getSingleTeacherByName(teacherName);

        res.send({ status: "OK", data: teacher });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }

};


module.exports = {
    getAllTeachers,
    getSingleTeacherById,
    getSingleTeacherByName
};