const { Router } = require("express");
const router = Router();

const { createCustomer , getAllCustomers , deleteCustomer , searchIdCustomer ,updateCustomer } = require("../controllers/customer.controllers");
 
router.get("/all" , getAllCustomers);
router.get("/:id" , searchIdCustomer);
router.post("/new" , createCustomer);
router.put("/:id/update" , updateCustomer);
router.delete("/:id/del" , deleteCustomer);


module.exports = router; 