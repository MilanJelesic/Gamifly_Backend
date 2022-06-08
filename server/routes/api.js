var express = require('express');
var router = express.Router();
const controllers = require("../controller.js");
router.get("/getGameList", controllers.getGameList);
router.get("/getUserInfo/:user_id", controllers.getUserInfo);
router.get("/getGamiflyWalletBalance/:user_id", controllers.getGamiflyWalletBalance);
router.post('/updateUserInfo', controllers.updateUserInfo);
module.exports = router;