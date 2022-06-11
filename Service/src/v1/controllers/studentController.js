const studentService = require("../services/studentService");


const getAllStudents = (req, res) => {
    try {
        const studentList = studentService.getAllStudents();

        res.send({ status: "OK", data: studentList });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleStudentById = (req, res) => {

    const {
        params: { studentId },
    } = req;


    if (!studentId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No id given as parameter to get a Student",
                },
            });
        return;
    }

    try {
        //console.log("ID: ", studentId);

        const student = studentService.getSingleStudentById(studentId);

        res.send({ status: "OK", data: student });

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }
};

const getSingleStudentByName = (req, res) => {

    const {
        params: { studentName },
    } = req;

    if (!studentName) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "No Name given as parameter to get a Student",
                },
            });
        return;
    }

    //console.log("name: ", studentName);

    try {
        const student = studentService.getSingleStudentByName(studentName);
        res.send({ status: "OK", data: student });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: error.status == 404 ? "NOT_FOUND" : "FAILED", data: { error: error?.message || error } });
    }

};


module.exports = {
    getAllStudents,
    getSingleStudentById,
    getSingleStudentByName
};