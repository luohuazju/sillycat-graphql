const {EmployeeQuery, EmployeeMutation} = require('./employee-resolver');
const {DepartmentQuery, DepartmentMutation} = require('./department-resolver');

module.exports = {
    ...EmployeeQuery,
    ...EmployeeMutation,
    ...DepartmentQuery,
    ...DepartmentMutation
}
