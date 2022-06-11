const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

/**
 * @openapi
 * /api/v1/teachers:
 *   get:
 *     tags:
 *       - Teachers
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
 *                     $ref: "#/components/schemas/Teacher"
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
router.get("/", teacherController.getAllTeachers);

/**
 * @openapi
 * /api/v1/teachers/id/{teacherId}:
 *   get:
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         schema:
 *          type: integer
 *         required: true
 *         description: Numeric ID of the Teacher to get
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
 *                     $ref: "#/components/schemas/Teacher"
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
router.get("/id/:teacherId", teacherController.getSingleTeacherById);

/**
 * @openapi
 * /api/v1/teachers/name/{teacherName}:
 *   get:
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: path
 *         name: teacherName
 *         schema:
 *          type: string
 *         required: true
 *         description: Name of the Teacher to get
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
 *                     $ref: "#/components/schemas/Teacher"
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
router.get("/name/:teacherName", teacherController.getSingleTeacherByName);


module.exports = router;