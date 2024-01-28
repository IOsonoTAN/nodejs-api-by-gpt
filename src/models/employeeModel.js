// employeeModel.js
const { pool } = require('../dbInit');

const getAllEmployees = async (page = 1, pageSize = 10) => {
  try {
    const offset = (page - 1) * pageSize;
    const result = await pool.query('SELECT * FROM employees LIMIT $1 OFFSET $2', [pageSize, offset]);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const createEmployee = async (employeeData) => {
  const { name, position, department, phone_number, employee_type, join_date, is_resigned } = employeeData;

  try {
    const result = await pool.query(
      'INSERT INTO employees (name, position, department, phone_number, employee_type, join_date, is_resigned) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, position, department, phone_number, employee_type, join_date, is_resigned]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateEmployee = async (id, employeeData) => {
  const { name, position, department, phone_number, employee_type, join_date, is_resigned } = employeeData;

  try {
    const result = await pool.query(
      'UPDATE employees SET name = $1, position = $2, department = $3, phone_number = $4, employee_type = $5, join_date = $6, is_resigned = $7 WHERE id = $8 RETURNING *',
      [name, position, department, phone_number, employee_type, join_date, is_resigned, id]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findByIdAndDelete = async (id) => {
  try {
    const result = await pool.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllEmployees, getById, createEmployee, updateEmployee, findByIdAndDelete };
