const routerData = require("express").Router();
const dataController = require("../controllers/data.controller");
const dataSchema = require("../models/data");

//API use

routerData.post("/data", async(req, res) => {
    try {
        const id = await dataController.addData(req.body);
        res.json(id);
    } catch (err) {
        return res.status(500).json({
            message: "Cannot create new Country"
        });
    }
});

routerData.get("/data", async(req, res) => {
    try  {
        res.json(await dataController.findAllData())
    } catch (err) {
        return res.status(500).json({
            message: ""
        });
    }
});

routerData.get("/data/:id", async(req, res) => {
    try  {
        const id = req.params.id;
        res.json(await dataController.findById(id))
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});



routerData.put('/data/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await dataController.updateData(id, new dataSchema(req.body.id)));
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerData.delete('/data/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await dataController.deleteData(id);
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

module.exports = routerData;