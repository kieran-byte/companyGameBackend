const divisionModel = require('../models/division');

exports.getAllDivisions = async (req, res) => {
    try {
        const divisions = await divisionModel.getAllDivisions();
        res.status(200).json(divisions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createDivision = async (req, res) => {
    try {
        const { companyId, locationId, type, budget } = req.body;
        const result = await divisionModel.createDivision(companyId, locationId, type, budget);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDivision = async (req, res) => {
    try {
        const { divisionId } = req.params;
        const data = req.body;
        const result = await divisionModel.updateDivision(divisionId, data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.transferOwnership = async (req, res) => {
    try {
        const { divisionId } = req.params;
        const { newOwnerId } = req.body;
        const result = await divisionModel.transferOwnership(divisionId, newOwnerId);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDivisionById = async (req, res) => {
    try {
        const { divisionId } = req.params;
        const division = await divisionModel.getDivisionById(divisionId);
        if (!division) {
            return res.status(404).json({ error: 'Division not found' });
        }
        res.status(200).json(division);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDivision = async (req, res) => {
    try {
        const { divisionId } = req.params;
        const result = await divisionModel.deleteDivision(divisionId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Division not found' });
        }
        res.status(200).json({ message: 'Division deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
