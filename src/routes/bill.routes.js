const { Router } = require("express");
const router = Router();

const { createBill , getAllBills , getRouteBill,  deleteBill , searchIdBill ,updateBill } = require("../controllers/bill.controllers");
 
router.get("/all" , getAllBills);
router.get("/:id" , searchIdBill);
router.get("/:id/route" , getRouteBill); //Buscar las facturas por rutas
router.post("/new" , createBill);
router.put("/:id/update" , updateBill);
router.delete("/:id/del" , deleteBill);


module.exports = router; 