const db = require('../config/db');

exports.createDivision = (company_id, location_id, type, marketingBudget) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO divisions (company_id, location_id, type, marketingBudget) VALUES (?, ?, ?, ?)';
        db.query(query, [company_id, location_id, type, marketingBudget], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.updateDivision = (divisionId, updates) => {
    return new Promise((resolve, reject) => {
        const fields = [];
        const values = [];
        for (const [key, value] of Object.entries(updates)) {
            fields.push(`${key} = ?`);
            values.push(value);
        }
        const query = `UPDATE divisions SET ${fields.join(', ')} WHERE division_id = ?`;
        values.push(divisionId);
        db.query(query, values, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.transferOwnership = (divisionId, newCompanyId) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE divisions SET company_id = ? WHERE division_id = ?';
        db.query(query, [newCompanyId, divisionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.getDivisionById = (divisionId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisions WHERE division_id = ?';
        db.query(query, [divisionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
};

exports.getAllDivisions = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisions';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.deleteDivision = (divisionId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM divisions WHERE division_id = ?';
        db.query(query, [divisionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};
