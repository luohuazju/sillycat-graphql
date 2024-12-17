const { logger } = require('../logger');


const Query = {
    departments: () => {
        // Mock database
        logger.info("method invoked here ---------");
        let items = [
            { id: '1', name: 'John Doe' },
            { id: '2', name: 'Jane Smith' },
        ];
        return items; 
    },
};

module.exports = {
    Query, 
};

// const Query = {
//         departments: () => {
//             return [{}];
//         },
//         department: (_, { id }) => {
//             return {};
//         },
//     }
// const Mutation = {
//         addDepartment: (_, { name }) => {
//             return {};
//         },
//         updateDepartment: (_, { id, name}) => {
//             return {};
//         },

//         deleteDepartment: (_, { id }) => {
//             return {};
//         },
//     }

// module.exports = {
//     Query,
//     Mutation
// }