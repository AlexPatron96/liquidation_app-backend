
const sellerService = require("../services/seller.services");

const allSellerAvailable = async (req, res) => {
    try {
        const result = await sellerService.all();
        res.status(200).json({ message: 'All sellers Availble', result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const searchIdSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await sellerService.idSearch(id);
        if (result) {
            res.status(200).json({ message: "Seller by id found and selected.", result });
        } else {
            res.status(400).json({ message: 'Something wrong' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createSeller = async (req, res) => {
    try {
        const seller = req.body;
        console.log(seller);
        const result = await sellerService.create(seller);
        if (result) {
            res.status(201).json({ message: 'Seller created', result });
        } else {
            res.status(400).json({ message: 'Something wrong' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const updateSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        console.log(id);
        console.log(data);
        const toUpdate = await sellerService.update(id, data);
        console.log(toUpdate);
        res.status(200).json({ message: 'Seller successfully updated' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await sellerService.delete(id);
        if (result) {
            res.status(200).json({ message: "Required field removed with success.", result });
        } else {
            res.status(400).json({ message: 'Something wrong' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = { allSellerAvailable, searchIdSeller, createSeller, updateSeller, deleteSeller };