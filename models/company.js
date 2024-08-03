const db = require('../config/db');

exports.createCompany = (name, playerId, locationId, balance) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO companies (name, location_id, balance) VALUES (?, ?, ?)';
        db.query(query, [name, playerId, locationId, balance], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.getCompanyById = (companyId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM companies WHERE company_id = ?';
        db.query(query, [companyId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
};

exports.getAllCompanies = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM companies';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.updateCompany = (companyId, name, playerId, locationId, balance) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE companies SET name = ?, location_id = ?, balance = ? WHERE company_id = ?';
        db.query(query, [name, playerId, locationId, balance, companyId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.deleteCompany = (companyId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM companies WHERE company_id = ?';
        db.query(query, [companyId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};
