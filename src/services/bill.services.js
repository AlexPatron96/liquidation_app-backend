const models = require("../models/index");
const transaction = require("../models/transaction");


class billService {

    static async all() {
        try {
            const result = await models.bills.findAll({
                attributes: {
                    exclude: ["id_client", "id_sellers"]
                },
                include: [
                    {
                        model: models.clients,
                        as: "client",
                        attributes: {
                            exclude: ["id_sellers", "id_route"]
                        },
                        include: [
                            {
                                model: models.route,
                                as: "route"
                            },
                        ],
                    },
                    {
                        model: models.transaction,
                        as: "transactions",
                    },
                    {
                        model: models.sellers,
                        as: "seller",
                    },
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async create(bill) {
        try {
            console.log(bill);
            const result = await models.bills.create(bill, {
                // include: {
                //     model: models.transaction,
                //     as: "transactions"
                // }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idBill(id) {
        try {
            const result = await models.bills.findByPk(id, {
                attributes: {
                    exclude: ["id_sellers"]
                },
                include: [
                    {
                        model: models.clients,
                        as: "client",
                        attributes: {
                            exclude: ["id_sellers", "id_route"]
                        },
                        include: [
                            {
                                model: models.route,
                                as: "route"
                            },

                        ],

                    },
                    {
                        model: models.transaction,
                        as: "transactions",
                    },
                    {
                        model: models.sellers,
                        as: "seller",
                    },
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async searchRoute(dia) {
        try {
            const result = await models.bills.findAll({
                include: {
                    model: models.clients,
                    as: "client",
                    
                    where:{
                        id_route: dia, 
                    }
                }

            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async delete(id) {
        try {
            const result = await models.bills.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, data) {
        try {
            const result = await models.bills.update(data, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = billService;