module.exports = (app) => {
  const passport = require("passport");
  const chains = require("../controllers/chains.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * definitions:
   *   Chain:
   *     type: object
   *     required:
   *       - name
   *       - colorIcon
   *       - icon
   *       - iconNew
   *       - supportToken
   *     properties:
   *       name:
   *         type: string
   *       colorIcon:
   *         type: string
   *       icon:
   *         type: string
   *       iconNew:
   *         type: string
   *       supportToken:
   *         type: boolean
   *   ResChain:
   *     type: object
   *     properties:
   *       id:
   *         type: number
   *       name:
   *         type: string
   *       colorIcon:
   *         type: string
   *       icon:
   *         type: string
   *       iconNew:
   *         type: string
   *       supportToken:
   *         type: boolean
   *       status:
   *         type: string
   *       createdAt:
   *         type: string
   *       updateAt:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Chain
   *   description: 블록체인
   */

  /**
   * @swagger
   * /api/chains:
   *   post:
   *     security:
   *       - bearerToken: []
   *     summary: 블록체인 등록
   *     description: 블록체인 등록
   *     tags: [Chain]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: param
   *         description: param
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Chain'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResChain'
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
    chains.create
  );

  /**
   * @swagger
   * /api/chains:
   *   get:
   *     summary: 블록체인 전체 조회
   *     description: 블록체인 전체 조회
   *     tags: [Chain]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: question
   *         description: question
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
   *             $ref: '#/definitions/ResChain'
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
  router.get("/", chains.findAll);

  /**
   * @swagger
   * /api/chains/{id}:
   *   get:
   *     summary: 블록체인 단건 조회
   *     description: 블록체인 단건 조회
   *     tags: [Chain]
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
   *           $ref: '#/definitions/ResChain'
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
  router.get("/:id", chains.findOne);

  /**
   * @swagger
   * /api/chains/{id}:
   *   put:
   *     security:
   *       - bearerToken: []
   *     summary: 블록체인 수정
   *     description: 블록체인 수정
   *     tags: [Chain]
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
   *           $ref: '#/definitions/Chain'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResChain'
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
    chains.update
  );

  /**
   * @swagger
   * /api/chains/{id}:
   *   delete:
   *     security:
   *       - bearerToken: []
   *     summary: 블록체인 삭제
   *     description: 블록체인 삭제
   *     tags: [Chain]
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
    chains.delete
  );

  /**
   * @swagger
   * /api/chains:
   *   delete:
   *     security:
   *       - bearerToken: []
   *     summary: 블록체인 전체 삭제
   *     description: 블록체인 전체 삭제
   *     tags: [Chain]
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
    chains.deleteAll
  );

  app.use("/api/chains", router);
};
