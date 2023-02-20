const { Router } = require("express");

const router = Router();

const { getAllLiqVeh, searchIdLiqVeh, createLiqVeh, updateLiqVeh, deleteLiqVeh } = require("../controllers/liquidationVeh.controllers");

router.get("/all", getAllLiqVeh);
router.get("/:id", searchIdLiqVeh);
router.post("/new", createLiqVeh);
router.put("/:id/update", updateLiqVeh);
router.delete("/:id/del", deleteLiqVeh);

// router.get("/:id/all", getIdAllLiqVeh);

module.exports = router; 