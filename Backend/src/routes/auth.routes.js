const { Router } = require("express");
const authController = require("../controllers/auth.controller")
const authMiddleware=require('../middlewares/auth.middleware')
const router = Router();

console.log("Auth routes file executed");
router.post('/register', authController.registerUser)

router.post('/login', authController.loginUser)

router.post('/get-me',authMiddleware.authUser,authController.getMe)

router.get('/logout',authController.logoutUser)

module.exports = router;