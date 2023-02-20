const custumerService = require("../services/customer.services");

const getAllCustomers = async (req, res) => {
    try {
        const result = await custumerService.allCustomers();
        res.status(200).json({ message: "Available vehicles ", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createCustomer = async (req, res) => {
    try {
        const vehicle = req.body;
        console.log(vehicle);
        const result = await custumerService.create(vehicle);
        if (result) {
            res.status(201).json({ message: 'Customer created' , result});
        } else {
            res.status(400).json({ message: "Something wrong" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const searchIdCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await custumerService.idCli(id);
        if (result) {
            res.status(200).json({ message: "Customer by id found and selected.", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await custumerService.delete(id);
        if (result) {
            res.status(200).json({ message: "Required field removed with success", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist.' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await custumerService.update(id, data);
        if (result) {
            res.status(200).json({ message: "Item modified successfully", result });
        } else {
            res.status(400).json({ message: 'It was not possible to modify this item' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {  getAllCustomers, createCustomer, searchIdCustomer, deleteCustomer, updateCustomer };