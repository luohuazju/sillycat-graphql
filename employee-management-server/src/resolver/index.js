const employeeResolver = require('./employee-resolver');
const departmentResolver = require('./department-resolver');

const resolvers = {
    Query: {
        ...employeeResolver.Query,
        ...departmentResolver.Query,
    },
    Mutation: {
        ...employeeResolver.Mutation,
    }
}
module.exports = resolvers;
