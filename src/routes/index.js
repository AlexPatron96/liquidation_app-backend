const authRoutes = require("./auth.routes");
const routeRoutes = require("./route.routes");
const vehRoutes = require("./vehicle.routes");
const sellerRoutes = require("./seller.routes");
const customerRoutes = require("./customer.routes");
const billRoutes = require("./bill.routes");
const transactionRoutes = require("./transaction.routes");
const liqVehRoutes = require("./liquidationVeh.routes");
const authMiddleware = require("../middlewares/auth.middlewares");


const routerApi = (app) => {
    //Rutas de Autorizacion
    app.use("/api/v1/auth", authRoutes);
    //Esta ruta de auth contiene la sub rutas
    // - /api/v1/auth/register ---> para registro de usuarios
    // - /api/v1/auth/login    ---> Logearse un usuario

    //Rutas de ruta de entrega
    app.use("/api/v1/route", routeRoutes);
    // - /api/v1/route/new  ---> Permite crear una nueva ruta
    // - /api/v1/route/all  ---> Retorna todas las Rutas de entrega
    // - /api/v1/route/:id/del  ---> Elimina ruta por id
    // - /api/v1/route/:id/update  ---> EditaRuta ruta por id

    //Rutas de vehiculos
    app.use("/api/v1/vehicles", vehRoutes);
    // - /api/v1/vehicles/new  ---> Permite crear una nuevo vehiculo
    // - /api/v1/vehicles/:id  ---> Retorna veh por su  id
    // - /api/v1/vehicles/all  ---> Retorna todos los vehiculos
    // - /api/v1/vehicles/:id/del  ---> Elimina vehiculo por id
    // - /api/v1/vehicles/:id/update  ---> edita un vehiculo por id

    //Rutas de Vendedores
    app.use("/api/v1/seller", sellerRoutes);
    // - /api/v1/seller/new  ---> Permite crear una nuevo Vendedor
    // - /api/v1/seller/:id  ---> Retorna un vendedor por su id
    // - /api/v1/seller/all  ---> Retorna todos los Vendedores
    // - /api/v1/seller/:id/del  ---> Elimina Un vendedor por id
    // - /api/v1/seller/:id/update  ---> edita un vendedor por id

    //Rutas de Clientes
    app.use("/api/v1/customer", customerRoutes);
    // - /api/v1/customer/new  ---> Permite crear una nuevo Clientes
    // - /api/v1/customers/:id  ---> Retorna un Clientes por su id
    // - /api/v1/customers/all  ---> Retorna todos los Clientes
    // - /api/v1/customers/:id/del  ---> Elimina Un Clientes por id
    // - /api/v1/customers/:id/update  ---> edita un Clientes por id

    //Rutas de Facturas
    app.use("/api/v1/bill", billRoutes);
    // - /api/v1/billnew  ---> Permite crear una nuevo Clientes
    // - /api/v1/bill/:id  ---> Retorna un Clientes por su id
    // - /api/v1/bill/all  ---> Retorna todos los Clientes
    // - /api/v1/bill/:id/del  ---> Elimina Un Clientes por id
    // - /api/v1/bill/:id/update  ---> edita un Clientes por id

    //Rutas de transaccion 
    app.use("/api/v1/payments", transactionRoutes);
    // - /api/v1/payments/new  ---> Permite crear una nuevo Pago
    // - /api/v1/payments/:id  ---> Retorna un pago por su id
    // - /api/v1/payments/all  ---> Retorna todos los pago
    // - /api/v1/payments/:id/all  ---> Retorna todos los pago x id de cliente
    // - /api/v1/payments/:id/del  ---> Elimina Un pago por id
    // - /api/v1/payments/:id/update  ---> edita un pago por id

    //Rutas de Liquidacion de Veh
    app.use("/api/v1/liquidation/veh", liqVehRoutes);
    // - /api/v1/liquidation/veh/new  ---> Permite crear una nueva Liquidacion de vehiculo 
    // - /api/v1/liquidation/veh/:i--> Retorna una liquidacion de veh por su id
    // - /api/v1/liquidation/veh/all  ---> Retorna todos las liquidaciones de vehiculo
    // - /api/v1/liquidation/veh/:id/del  ---> Elimina Un  por id
    // - /api/v1/liquidation/veh/:id/update  ---> edita un  por id


}

module.exports = routerApi;