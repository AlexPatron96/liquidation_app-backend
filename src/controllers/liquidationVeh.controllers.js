const genCod = require(".");
const liquidationVeh = require("../services/liquidationVeh.services");

const getAllLiqVeh = async (req, res) => {
    try {
        const result = await liquidationVeh.all();
        res.status(200).json({ message: "Available liquidation vehicle ", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createLiqVeh = async (req, res) => {
    try {
        let data = req.body;
        const prefix = "LIQ-VEH-";
        const codLiq = genCod(prefix)
        data.id_cash = codLiq;
        data.id_expense = codLiq;
        data.id_product_retorned = codLiq;
        console.log(data);
        // res.status(201).json({ message: 'Liquidation Vehicle created' });
        const result = await liquidationVeh.create(data);
        if (result) {
            res.status(201).json({ message: 'Liquidation Vehicle created' });
        } else {
            res.status(400).json({ message: "Something wrong" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const searchIdLiqVeh = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await liquidationVeh.idLiqVeh(id);
        if (result) {
            res.status(200).json({ message: "Liquidation Vehicle by id found and selected.", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteLiqVeh = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await liquidationVeh.delete(id);
        if (result) {
            res.status(200).json({ message: "Required field removed with success", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist.' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateLiqVeh = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await liquidationVeh.update(id, data);
        if (result) {
            res.status(200).json({ message: "Item modified successfully", result });
        } else {
            res.status(400).json({ message: 'It was not possible to modify this item' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { getAllLiqVeh, searchIdLiqVeh, createLiqVeh, updateLiqVeh, deleteLiqVeh };