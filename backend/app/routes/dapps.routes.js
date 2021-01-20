module.exports = (app) => {
  const passport = require("passport");
  const dapps = require("../controllers/dapps.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * definitions:
   *   Dapp:
   *     type: object
   *     required:
   *       - categorysId
   *       - isOwner
   *       - contactEmail
   *       - logo
   *       - name
   *       - url
   *       - images
   *       - recommendTags
   *       - expectedMainnetTime
   *       - state
   *       - articleLink
   *     properties:
   *       categorysId:
   *         type: number
   *       isOwner:
   *         type: boolean
   *       contactEmail:
   *         type: string
   *       logo:
   *         type: string
   *       name:
   *         type: string
   *       url:
   *         type: string
   *       images:
   *         type: string
   *       recommendTags:
   *         type: string
   *       expectedMainnetTime:
   *         type: string
   *       state:
   *         type: string
   *       articleLink:
   *         type: string
   *   ResDapp:
   *     type: object
   *     properties:
   *       id:
   *         type: number
   *       usersId:
   *         type: number
   *       name:
   *         type: string
   *       description:
   *         type: string
   *       status:
   *         type: string
   *       ipAddress:
   *         type: string
   *       createdAt:
   *         type: string
   *       updateAt:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Dapp
   *   description: 디앱
   */

  /**
   * @swagger
   * /api/dapps:
   *   dapp:
   *     security:
   *       - bearerToken: []
   *     summary: 디앱 등록
   *     description: 디앱 등록
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: param
   *         description: param
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Dapp'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResDapp'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    dapps.create
  );

  /**
   * @swagger
   * /api/dapps:
   *   get:
   *     summary: 디앱 전체 조회
   *     description: 디앱 전체 조회
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: title
   *         description: title
   *         in: query
   *       - name: page
   *         description: page
   *         in: query
   *       - name: size
   *         description: size
   *         in: query
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ResDapp'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.get("/", dapps.findAll);

  /**
   * @swagger
   * /api/dapps/{id}:
   *   get:
   *     summary: 디앱 단건 조회
   *     description: 디앱 단건 조회
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResDapp'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.get("/:id", dapps.findOne);

  /**
   * @swagger
   * /api/dapps/{id}:
   *   put:
   *     security:
   *       - bearerToken: []
   *     summary: 디앱 수정
   *     description: 디앱 수정
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID
   *         schema:
   *           type: integer
   *       - name: param
   *         description: param
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Dapp'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResDapp'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.put(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    dapps.update
  );

  /**
   * @swagger
   * /api/dapps/{id}:
   *   delete:
   *     security:
   *       - bearerToken: []
   *     summary: 디앱 삭제
   *     description: 디앱 삭제
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: OK
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    dapps.delete
  );

  /**
   * @swagger
   * /api/dapps:
   *   delete:
   *     security:
   *       - bearerToken: []
   *     summary: 디앱 전체 삭제
   *     description: 디앱 전체 삭제
   *     tags: [Dapp]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: OK
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.delete(
    "/",
    passport.authenticate("jwt", { session: false }),
    dapps.deleteAll
  );

  app.use("/api/dapps", router);
};
