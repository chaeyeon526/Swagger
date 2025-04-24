const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 사용자 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *               - password
 *               - email
 *               - name
 *               - phone
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 사용자 아이디
 *               password:
 *                 type: string
 *                 description: 사용자 비밀번호
 *               email:
 *                 type: string
 *                 description: 이메일 주소
 *               name:
 *                 type: string
 *                 description: 이름
 *               phone:
 *                 type: string
 *                 description: 전화번호
 *     responses:
 *       200:
 *         description: 회원가입 완료
 *       400:
 *         description: 입력값 오류 또는 중복된 아이디
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: 사용자 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *               - password
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 사용자 아이디
 *               password:
 *                 type: string
 *                 description: 사용자 비밀번호
 *     responses:
 *       200:
 *         description: 로그인 성공
 *       401:
 *         description: 로그인 실패
 */

/**
 * @swagger
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *               - email
 *               - name
 *               - phone
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 사용자 아이디
 *               email:
 *                 type: string
 *                 description: 수정할 이메일
 *               name:
 *                 type: string
 *                 description: 수정할 이름
 *               phone:
 *                 type: string
 *                 description: 수정할 전화번호
 *     responses:
 *       200:
 *         description: 회원정보 수정 성공
 *       404:
 *         description: 사용자를 찾을 수 없음
 */
/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 회원 탈퇴
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 탈퇴할 사용자 아이디
 *     responses:
 *       200:
 *         description: 탈퇴 성공
 *       404:
 *         description: 사용자를 찾을 수 없음
 */
module.exports = router;
