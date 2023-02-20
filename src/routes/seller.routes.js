const { Router } = require("express");
const router = Router();

const { allSellerAvailable, searchIdSeller, createSeller, updateSeller, deleteSeller } = require("../controllers/seller.controllers");

// router.get("/all" , getAllVehicles);
//router.patch("/:id/update" , updateSeller);
router.get("/all", allSellerAvailable);
router.get("/:id", searchIdSeller);
router.post("/new", createSeller);
router.put("/:id/update", updateSeller);
router.delete("/:id/del", deleteSeller);

module.exports = router; 