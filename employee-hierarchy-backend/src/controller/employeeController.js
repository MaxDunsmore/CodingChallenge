import * as EmployeeService from '../service/employeeService.js';
import logger from '../config/logger.js';

const fetchHierarchy = async (req, res) => {
  try {
    logger.info('Fetching employee hierarchy...');
    const hierarchy = await EmployeeService.getEmployeeHierarchy();
    res.json(hierarchy);
    logger.info('Employee hierarchy fetched successfully.');
  } catch (error) {
    logger.error('Error fetching employee hierarchy: %s', error.message);
    res.status(500).send(error.message);
  }
};

const addEmployees = async (req, res) => {
  try {
    const employeeData = req.body;
    logger.info('Adding or updating employees...');
    const hierarchy = await EmployeeService.addEmployees(employeeData);
    res.json(hierarchy);
    logger.info('Employees added or updated successfully.');
  } catch (error) {
    logger.error('Error adding or updating employees: %s', error.message);
    res.status(500).send(error.message);
  }
};


export { fetchHierarchy,addEmployees };
