const locationModel = require('../models/location');

// Create a new location
exports.createLocation = async (req, res) => {
    try {
        const { name, country, suburb, macroeconomicIndicator, consumptionLevel } = req.body;
        const result = await locationModel.createLocation(name, country, suburb, macroeconomicIndicator, consumptionLevel);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a location by ID
exports.getLocationById = async (req, res) => {
    try {
        const { locationId } = req.params;
        const location = await locationModel.getLocationById(locationId);
        if (!location) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.status(200).json(location);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all locations
exports.getAllLocations = async (req, res) => {
    try {
        const locations = await locationModel.getAllLocations();
        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a location
exports.updateLocation = async (req, res) => {
    try {
        const { locationId } = req.params;
        const data = req.body;
        const result = await locationModel.updateLocation(locationId, data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a location
exports.deleteLocation = async (req, res) => {
    try {
        const { locationId } = req.params;
        const result = await locationModel.deleteLocation(locationId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.status(200).json({ message: 'Location deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
