const models = require("../models/index");


class liquidationVeh {

    static async all() {
        try {
            const result = await models.liquidation_veh.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async create(data) {
        try {
            const result = await models.liquidation_veh.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idLiqVeh(id) {
        try {
            const result = await models.liquidation_veh.findByPk(id, {
                // attributes: {
                //     exclude: ["id_route"]
                // },
                // include: {
                //     model: models.route,
                //     as: "route",
                // }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idAll(id) {
        try {
            const result = await models.liquidation_veh.findAndCountAll(id);
            return result;
        } catch (error) {
            throw error;
        }
    };


    static async delete(id) {
        try {
            const result = await models.liquidation_veh.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, data) {
        try {
            const result = await models.liquidation_veh.update(data, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = liquidationVeh;