const { logger } = require('../logger');


const Query = {
        departments: () => {
            return [{}];
        },
        department: (_, { id }) => {
            return {};
        },
    }
const Mutation = {
        addDepartment: (_, { name }) => {
            return {};
        },
        updateDepartment: (_, { id, name}) => {
            return {};
        },

        deleteDepartment: (_, { id }) => {
            return {};
        },
    }

module.exports = {
    Query,
    Mutation
}