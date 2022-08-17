const router = require("express").Router()
const userController = require("../controller/user.controller")

router.get("/", userController.all)
router.get("/add", userController.add)
router.get("/addPost", userController.addPost)
router.post("/addPost", userController.addPostLogic)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/del/:id", userController.del)
router.get("/single/:id", userController.single)

module.exports = router