const { logger } = require('../logger');

// Mock database
let employees = [
    { id: '1', name: 'John Doe', age: 30, department: 'Engineering' },
    { id: '2', name: 'Jane Smith', age: 25, department: 'Marketing' },
];

const Query = {
    employees: () => {
        logger.info("method invoked here for employees ---------");
        return employees;
    },
    employee: (_, { id }) => {
        logger.info("method invoked here for employee with id: " + id + " ------ ");
        let employee = employees.find((emp) => emp.id === id);
        return employee;
    },
};

const Mutation = {
    addEmployee: (_, { name, age, department }) => {
        const newEmployee = {
            id: String(employees.length + 1),
            name,
            age,
            department,
        };
        employees.push(newEmployee);
        return newEmployee;
    },
    updateEmployee: (_, { id, name, age, department }) => {
        const employee = employees.find((emp) => emp.id === id);
        if (!employee) throw new Error('Employee not found');
        if (name !== undefined) employee.name = name;
        if (age !== undefined) employee.age = age;
        if (department !== undefined) employee.department = department;
        return employee;
    },

    deleteEmployee: (_, { id }) => {
        const index = employees.findIndex((emp) => emp.id === id);
        if (index === -1){ throw new Error('Employee not found');}
        return employees.splice(index, 1)[0];
    },
}

module.exports = {
    Query, 
    Mutation,
};

