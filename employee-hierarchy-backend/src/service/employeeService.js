import Employee from '../model/employeeModel.js';
import logger from '../config/logger.js'

function buildHierarchy(employees) {
  const employeeMap = {};
  const hierarchy = [];

  // Create a map of all employees by their id
  employees.forEach(employee => {
    employeeMap[employee.id] = { ...employee._doc, subordinates: [] };
  });

  // Build the hierarchy
  employees.forEach(employee => {
    const emp = employeeMap[employee.id];
    if (employee.managerId === undefined || employee.managerId === null) {
      // Employee is top-level, as they have no manager
      hierarchy.push(emp);
    } else {
      // Add this employee to their manager's subordinates list
      if (employeeMap[employee.managerId]) { 
        employeeMap[employee.managerId].subordinates.push(emp);
      }
    }
  });

  return hierarchy;
}

const getEmployeeHierarchy = async () => {
  try {
    const employees = await Employee.find();
    return buildHierarchy(employees)
  } catch (error) {
    logger.error('Failed to fetch employees: %s', error.message);
    throw error;
  }
};

const addEmployees = async (employees) => {
  try {
    logger.info('Adding employee information to database');

    if (!Array.isArray(employees)) {
      employees = [employees]; // If it's a single object, make it an array
    }

    // Insert or update employees in the database
    const insertPromises = employees.map(async (emp) => {
      const { id, name, managerId } = emp;
      // Check if employee already exists, if so, update; if not, insert
      const existingEmployee = await Employee.findOne({ id });
      if (existingEmployee) {
        return Employee.updateOne({ id }, { name, managerId });
      } else {
        return new Employee({ id, name, managerId }).save();
      }
    });
    
    await Promise.all(insertPromises);
    
    logger.info('Successfully added/updated employees.');
  } catch (error) {
   logger.error('Failed to add/update employees: %s', error.message);
   throw error;
  }
 };

export { getEmployeeHierarchy, addEmployees };
