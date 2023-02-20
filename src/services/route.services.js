const models = require("../models/index");


class RouteService {
    static async create(newRoute) {
        try {
            const result = await models.route.create(newRoute);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idRoute(id) {
        try {
            console.log(id);
            const result = await models.route.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    };
    static async update(id, data) {
        try {
            const result = await models.route.update(data, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async delRoute(id) {
        try {

            const result = await models.route.destroy({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async allRoute() {
        try {
            const result = await models.route.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = RouteService;