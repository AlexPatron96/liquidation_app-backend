const { Router } = require("express");
const router = Router();

const { getAllRoute, getIdRoute, createRoute, deleteRoute , updateRoute } = require("../controllers/route.controllers");

router.get("/all", getAllRoute);
router.get("/:id", getIdRoute);
router.post("/new", createRoute);
router.delete("/:id/del", deleteRoute);
router.put("/:id/update", updateRoute);
module.exports = router; 