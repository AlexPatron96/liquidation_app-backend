const models = require("../models/index");


class vehService {

    static async allVehicle() {
        try {
            const result = await models.vehicles.findAll({
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
            const result = await models.vehicles.create(vehicle);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async idVehicle(id) {
        try {
            const result = await models.vehicles.findByPk(id, {
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
            const result = await models.vehicles.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async update(id, data) {
        try {
            const result = await models.vehicles.update(data, { where: { id } });
            console.log(result);
            if (result[0] !== 0) {
                console.log("es cero");
                return {ok: true, result};
            } else {
                return {ok : false ,message: "No se pudo actualizar el item"}
            }
        } catch (error) {
            throw error;
        }
    };
};

module.exports = vehService;