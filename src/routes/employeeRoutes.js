const express = require('express');
const { getClient } = require('../cacheInit');
const employeeController = require('../controllers/employeeController');

const checkCache = async (req, res, next) => {
  const client = getClient();
  const url = req.originalUrl;
  const data = await client.get(url);
  if (!data) {
    return next();
  }
  return res.json(JSON.parse(data));
};

const router = express.Router();

module.exports = () => {
  router.get('/', checkCache, (req, res) => employeeController.getEmployees(req, res));
  router.get('/:id', (req, res) => employeeController.getEmployeeById(req, res));
  router.post('/', (req, res) => employeeController.createEmployee(req, res));
  router.put('/:id', (req, res) => employeeController.updateEmployee(req, res));
  router.delete('/:id', (req, res) => employeeController.deleteEmployee(req, res));

  return router;
};
