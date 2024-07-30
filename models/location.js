const db = require('../config/db');

// Create a new location
exports.createLocation = (name, country, suburb, macroeconomicIndicator, consumptionLevel) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO locations (name, country, suburb, macroeconomic_indicator, consumption_level) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, country, suburb, macroeconomicIndicator, consumptionLevel], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Get a location by ID
exports.getLocationById = (locationId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM locations WHERE location_id = ?';
        db.query(query, [locationId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
};

// Get all locations
exports.getAllLocations = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM locations';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Update a location
exports.updateLocation = (locationId, updates) => {
    return new Promise((resolve, reject) => {
        const fields = [];
        const values = [];
        for (const [key, value] of Object.entries(updates)) {
            fields.push(`${key} = ?`);
            values.push(value);
        }
        const query = `UPDATE locations SET ${fields.join(', ')} WHERE location_id = ?`;
        values.push(locationId);
        db.query(query, values, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Delete a location
exports.deleteLocation = (locationId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM locations WHERE location_id = ?';
        db.query(query, [locationId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};
