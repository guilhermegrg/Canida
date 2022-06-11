const express = require("express");
const teacherRouter = require("./v1/routes/teachersRoutes");
const studentRouter = require("./v1/routes/studentsRoutes");
const courseRouter = require("./v1/routes/coursesRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");



const app = express();
const PORT = process.env.PORT || 4321;


app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);



app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});