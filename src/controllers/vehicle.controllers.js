const vehService = require("../services/vehicle.services");

const getAllVehicles = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params);
        const result = await vehService.allVehicle();
        res.status(200).json({ message: "Available vehicles ", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createVehicle = async (req, res) => {
    try {
        const vehicle = req.body;
        console.log(vehicle);
        const result = await vehService.create(vehicle);
        if (result) {
            res.status(201).json({ message: 'Vehicle created' });
        } else {
            res.status(400).json({ message: "Something wrong" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const searchIdVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await vehService.idVehicle(id);
        if (result) {
            res.status(200).json({ message: "Vehicle by id found and selected.", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await vehService.delete(id);
        if (result) {
            res.status(200).json({ message: "Required field removed with success", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist.' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log(data);
        const result = await vehService.update(id, data);
        if (result.ok) {
            res.status(200).json({ message: "Item modified successfully", result });
        } else {
            res.status(400).json({ message: 'It was not possible to modify this item' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { createVehicle, getAllVehicles, deleteVehicle, searchIdVehicle, updateVehicle };