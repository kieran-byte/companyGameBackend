const companyModel = require('../models/company');

exports.createCompany = async (req, res) => {
    const { name, playerId, locationId, balance } = req.body;
    try {
        const result = await companyModel.createCompany(name, playerId, locationId, balance);
        res.status(201).json({ message: 'Company created successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error creating company', error });
    }
};

exports.getCompanyById = async (req, res) => {
    const { companyId } = req.params;
    try {
        const company = await companyModel.getCompanyById(companyId);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving company', error });
    }
};

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await companyModel.getAllCompanies();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving companies', error });
    }
};

exports.updateCompany = async (req, res) => {
    const { companyId } = req.params;
    const { name, playerId, locationId, balance } = req.body;
    try {
        const result = await companyModel.updateCompany(companyId, name, playerId, locationId, balance);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company updated successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error updating company', error });
    }
};

exports.deleteCompany = async (req, res) => {
    const { companyId } = req.params;
    try {
        const result = await companyModel.deleteCompany(companyId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting company', error });
    }
};
