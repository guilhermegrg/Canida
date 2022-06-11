const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

/**
 * @openapi
 * /api/v1/courses:
 *   get:
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Course"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", courseController.getAllCourses);



/**
 * @openapi
 * /api/v1/courses/id/{courseId}:
 *   get:
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: courseId
 *         schema:
 *          type: integer
 *         required: true
 *         description: Numeric ID of the Course to get
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                     $ref: "#/components/schemas/Course"
 *       404:
 *         description: NOT_FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT_FOUND
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message" 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/id/:courseId", courseController.getSingleCourseById);



/**
 * @openapi
 * /api/v1/courses/name/{courseName}:
 *   get:
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: courseName
 *         schema:
 *          type: string
 *         required: true
 *         description: Name of the Course to get
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                     $ref: "#/components/schemas/Course"
 *       404:
 *         description: NOT_FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT_FOUND
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message" 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/name/:courseName", courseController.getSingleCourseByName);


module.exports = router;