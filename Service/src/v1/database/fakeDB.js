const db = require("./db.json");


let temp = { teachers: [...db.teachers], students: [...db.students] };
console.log(temp);


let newCourses = db.courses.map(el => {
    let newCourse = { ...el };

    newCourse.teacher = db.teachers.find(el => el.id == newCourse.teacher_id);
    delete newCourse.teacher_id;

    let newStudentList = newCourse.student_ids.map(el => db.students.find(s => s.id == el));
    delete newCourse.student_ids;
    newCourse.students = newStudentList;

    return newCourse;
});

temp.courses = newCourses;

console.log(JSON.stringify(temp));

const data = temp;

module.exports = {
    data
};
