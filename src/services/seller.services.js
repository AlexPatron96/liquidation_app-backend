const models = require("../models/index");

class sellerService {

    static async all() {
        try {
            const result = await models.sellers.findAll({
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

    static async create(vehicle) {
        try {
            const result = await models.sellers.create(vehicle);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idSearch(id) {
        try {
            const result = await models.sellers.findByPk(id, {
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
            const result = await models.sellers.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, data) {
        try {
            const result = await models.sellers.update(data, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = sellerService;