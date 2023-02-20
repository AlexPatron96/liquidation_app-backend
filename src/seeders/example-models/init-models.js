const DataTypes = require("sequelize").DataTypes;
const _transaction = require("./transaction");
const _bills = require("./bills");
const _bills_liquidation_sellers = require("./bills_liquidation_sellers");
const _bills_liquidation_veh = require("./bills_liquidation_veh");
const _cash = require("./cash");
const _clients = require("./clients");
const _cuadre_sell = require("./cuadre_sell");
const _cuadre_veh = require("./cuadre_veh");
const _expense = require("./expense");
const _liquidation_sellers = require("./liquidation_sellers");
const _liquidation_veh = require("./liquidation_veh");
const _products_returned = require("./products_returned");
const _route = require("./route");
const _sellers = require("./sellers");
const _users = require("./users");
const _vehicles = require("./vehicles");

function initModels(sequelize) {
  const transaction = _transaction(sequelize, DataTypes);
  const bills = _bills(sequelize, DataTypes);
  const bills_liquidation_sellers = _bills_liquidation_sellers(sequelize, DataTypes);
  const bills_liquidation_veh = _bills_liquidation_veh(sequelize, DataTypes);
  const cash = _cash(sequelize, DataTypes);
  const clients = _clients(sequelize, DataTypes);
  const cuadre_sell = _cuadre_sell(sequelize, DataTypes);
  const cuadre_veh = _cuadre_veh(sequelize, DataTypes);
  const expense = _expense(sequelize, DataTypes);
  const liquidation_sellers = _liquidation_sellers(sequelize, DataTypes);
  const liquidation_veh = _liquidation_veh(sequelize, DataTypes);
  const products_returned = _products_returned(sequelize, DataTypes);
  const route = _route(sequelize, DataTypes);
  const sellers = _sellers(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const vehicles = _vehicles(sequelize, DataTypes);

  bills_liquidation_sellers.belongsTo(bills, { as: "id_bills_bill", foreignKey: "id_bills"});
  bills.hasMany(bills_liquidation_sellers, { as: "bills_liquidation_sellers", foreignKey: "id_bills"});

  bills_liquidation_veh.belongsTo(bills, { as: "id_bills_bill", foreignKey: "id_bills"});
  bills.hasMany(bills_liquidation_veh, { as: "bills_liquidation_vehs", foreignKey: "id_bills"});

  transaction.belongsTo(bills, { as: "id_bills_bill", foreignKey: "id_bills"});
  bills.hasMany(transaction, { as: "transactions", foreignKey: "id_bills"});

  bills.belongsTo(clients, { as: "client", foreignKey: "id_clients"});
  clients.hasMany(bills, { as: "bills", foreignKey: "id_clients"});

  transaction.belongsTo(clients, { as: "id_client_client", foreignKey: "id_client"});
  clients.hasMany(transaction, { as: "transactions", foreignKey: "id_client"});

  bills_liquidation_sellers.belongsTo(liquidation_sellers, { as: "id_liquidation_sellers_liquidation_seller", foreignKey: "id_liquidation_sellers"});
  liquidation_sellers.hasMany(bills_liquidation_sellers, { as: "bills_liquidation_sellers", foreignKey: "id_liquidation_sellers"});

  cash.belongsTo(liquidation_sellers, { as: "id_tabla_liq_liquidation_seller", foreignKey: "id_tabla_liq"});
  liquidation_sellers.hasOne(cash, { as: "cash", foreignKey: "id_tabla_liq"});

  expense.belongsTo(liquidation_sellers, { as: "id_tabla_liq_liquidation_seller", foreignKey: "id_tabla_liq"});
  liquidation_sellers.hasOne(expense, { as: "expense", foreignKey: "id_tabla_liq"});

  bills_liquidation_veh.belongsTo(liquidation_veh, { as: "id_liquidation_veh_liquidation_veh", foreignKey: "id_liquidation_veh"});
  liquidation_veh.hasMany(bills_liquidation_veh, { as: "bills_liquidation_vehs", foreignKey: "id_liquidation_veh"});

  products_returned.belongsTo(liquidation_veh, { as: "id_tabla_liq_liquidation_veh", foreignKey: "id_tabla_liq"});
  liquidation_veh.hasOne(products_returned, { as: "products_returned", foreignKey: "id_tabla_liq"});

  clients.belongsTo(route, { as: "route", foreignKey: "id_route"});
  route.hasMany(clients, { as: "clients", foreignKey: "id_route"});

  liquidation_sellers.belongsTo(route, { as: "id_route_route", foreignKey: "id_route"});
  route.hasMany(liquidation_sellers, { as: "liquidation_sellers", foreignKey: "id_route"});

  liquidation_veh.belongsTo(route, { as: "id_route_route", foreignKey: "id_route"});
  route.hasMany(liquidation_veh, { as: "liquidation_vehs", foreignKey: "id_route"});

  sellers.belongsTo(route, { as: "route", foreignKey: "id_route"});
  route.hasMany(sellers, { as: "sellers", foreignKey: "id_route"});

  vehicles.belongsTo(route, { as: "route", foreignKey: "id_route"});
  route.hasMany(vehicles, { as: "vehicles", foreignKey: "id_route"});

  bills.belongsTo(sellers, { as: "seller", foreignKey: "id_sellers"});
  sellers.hasMany(bills, { as: "bills", foreignKey: "id_sellers"});

  clients.belongsTo(sellers, { as: "seller", foreignKey: "id_sellers"});
  sellers.hasMany(clients, { as: "clients", foreignKey: "id_sellers"});

  cuadre_sell.belongsTo(sellers, { as: "id_sellers_seller", foreignKey: "id_sellers"});
  sellers.hasMany(cuadre_sell, { as: "cuadre_sells", foreignKey: "id_sellers"});

  liquidation_sellers.belongsTo(sellers, { as: "id_sellers_seller", foreignKey: "id_sellers"});
  sellers.hasMany(liquidation_sellers, { as: "liquidation_sellers", foreignKey: "id_sellers"});

  liquidation_sellers.belongsTo(users, { as: "id_users_user", foreignKey: "id_users"});
  users.hasMany(liquidation_sellers, { as: "liquidation_sellers", foreignKey: "id_users"});

  liquidation_veh.belongsTo(users, { as: "id_users_user", foreignKey: "id_users"});
  users.hasMany(liquidation_veh, { as: "liquidation_vehs", foreignKey: "id_users"});

  transaction.belongsTo(users, { as: "id_users_user", foreignKey: "id_users"});
  users.hasMany(transaction, { as: "transactions", foreignKey: "id_users"});

  cuadre_veh.belongsTo(vehicles, { as: "id_veh_vehicle", foreignKey: "id_veh"});
  vehicles.hasMany(cuadre_veh, { as: "cuadre_vehs", foreignKey: "id_veh"});

  liquidation_veh.belongsTo(vehicles, { as: "id_vehiculo_vehicle", foreignKey: "id_vehiculo"});
  vehicles.hasMany(liquidation_veh, { as: "liquidation_vehs", foreignKey: "id_vehiculo"});

  return {
    bills,
    bills_liquidation_sellers,
    bills_liquidation_veh,
    cash,
    clients,
    cuadre_sell,
    cuadre_veh,
    expense,
    liquidation_sellers,
    liquidation_veh,
    products_returned,
    route,
    sellers,
    transaction,
    users,
    vehicles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
