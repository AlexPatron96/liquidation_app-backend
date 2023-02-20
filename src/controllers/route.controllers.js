const RouteService = require("../services/route.services");

const createRoute = async (req, res) => {
    try {
        const route = req.body;
        console.log(route);
        const result = await RouteService.create(route);
        if (result) {
            res.status(201).json({ message: 'Route Create' });
        } else {
            res.status(400).json({ message: "Something wrong" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllRoute = async (req, res) => {
    try {
        const result = await RouteService.allRoute();
        res.status(200).json({ message: "Available routes ", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getIdRoute = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await RouteService.idRoute(id);
        res.status(200).json({ message: "Available routes ", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRoute = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        // const consult = await RouteService.idRoute(id);
        const result = await RouteService.delRoute(id);
        // res.status(200).json({ message: "required field removed with success", result });
        if (result) {
            res.status(200).json({ message: "required field removed with success", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const updateRoute = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await RouteService.update(id, data);
        // res.status(200).json({ message: "required field removed with success", result });
        if (result) {
            res.status(200).json({ message: "Required field update with success", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createRoute, getAllRoute, getIdRoute, deleteRoute, updateRoute };