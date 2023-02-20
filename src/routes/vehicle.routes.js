const { Router } = require("express");
const router = Router();

const { createVehicle , getAllVehicles , deleteVehicle , searchIdVehicle ,updateVehicle } = require("../controllers/vehicle.controllers");
 
router.get("/all" , getAllVehicles);
router.get("/:id" , searchIdVehicle);
router.post("/new" , createVehicle);
router.put("/:id/update" , updateVehicle);
router.delete("/:id/del" , deleteVehicle);
module.exports = router; 