const models = require("../models/index");


class customerService {

    static async allCustomers() {
        try {
            const result = await models.clients.findAll({
                attributes: {
                    // exclude: ["id_route"]
                    exclude: ["id_route", "id_sellers"]
                },
                include: [
                    {
                        model: models.route,
                        as: "route",
                    }, {
                        model: models.sellers,
                        as: "seller",
                    }
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async create(data) {
        try {
            const result = await models.clients.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idCli(id) {
        try {
            const result = await models.clients.findByPk(id, {
                attributes: {
                    exclude: ["id_route"]
                },
                include: {
                    model: models.route,
                    as: "route",
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };


    static async delete(id) {
        try {
            const result = await models.clients.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, data) {
        try {
            const result = await models.clients.update(data, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = customerService;