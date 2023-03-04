const genCod = require("./index");
const billService = require("../services/bill.services");
const transactionService = require("../services/transaction.services");
const RouteService = require("../services/route.services");

const getAllBills = async (req, res) => {
    try {
        const result = await billService.all();
        res.status(200).json({ message: "Invoices available", result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRouteBill = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const findRoute = await billService.searchRoute(id);
        res.status(200).json({ message: `Invoices available por la ruta del   `, findRoute });
        // const data = req.body;
        // const {  detail , status } = findRoute;
        // console.log(detail+status);
        // const result = await billService.searchRoute(id);
        // if (result) {
        //     res.status(200).json({ message: `Invoices available por la ruta del ${status} Detalle ${detail}  `, result });
        // } else {
        //     res.status(400).json({ message: 'The requested parameter does not exist' });
        // }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createBill = async (req, res) => {
    try {
        const data = req.body;
        console.log("Alex");
        console.log(data);
        const { num_Fact, isWhite } = data;
        let isValid = false;
        console.log(num_Fact);
        if (!isWhite) {
            const validator = /\d{3}\-\d{3}\-\d{9}/;
            console.log(validator.test(num_Fact))
            if (validator.test(num_Fact)) {
                console.log("SI CUMPLE LA VALIDACION");
                isValid = true;
            } else {
                res.status(400).json({ message: "El numero de factura no cumple con la validacion" });
            }
        } else {
            num = await genCod("FA-W-")
            data.num_Fact = num;
            isValid = true;
            console.log(data);
        }

        if (isValid) {
            const result = await billService.create(data);
            // console.log(result);
            console.log(isValid);
            if (result) {

                const { id: id_bills, num_Fact, fecha_entrega: fecha_abono, id_clients: id_client } = result;
                const id_user = null;
                const abono = 0;
                const transaction = { num_Fact, fecha_abono, abono, id_user, id_bills, id_client };
                console.log(transaction);
                const initTransaction = await transactionService.create(transaction)
                //console.log(initTransaction);
                if (initTransaction) {
                    res.status(201).json({ message: 'Invoice created', result, transaction });
                } else {
                    res.status(400).json({ message: "Something wrong" });
                }
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const searchIdBill = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await billService.idBill(id);
        if (result) {
            res.status(200).json({ message: "Invoice by id found and selected..", result });
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBill = async (req, res) => {
    try {
        const { id } = req.params;
        const findBill = await billService.idBill(id);
        if (findBill) {
            const { num_Fact } = findBill;
            const deleteLote = await transactionService.deleteLote(num_Fact);
            if (deleteLote) {
                console.log(deleteLote);
                const result = await billService.delete(id);
                if (result) {
                    res.status(200).json({ message: "Required field removed with success", result, deleteLote });
                }
                // findTrans.map(async trans => {
                //     // const del = await transactionService.delete(trans.id);
                //     // if (del) {
                //     //     console.log("borro correctamen la transacion");
                //     // } else {
                //     //     console.log("no borro correctamente la transacion");
                //     // }
                // });
            }
        } else {
            res.status(400).json({ message: 'The requested parameter does not exist.' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateBill = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await billService.update(id, data);
        if (result) {
            res.status(200).json({ message: "Item modified successfully", result });
        } else {
            res.status(400).json({ message: 'It was not possible to modify this item' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { createBill, getAllBills, getRouteBill, deleteBill, searchIdBill, updateBill };