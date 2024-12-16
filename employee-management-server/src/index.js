const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {logger} = require('./logger');
const {getContext} = require('./context');
const schemas = require('./schema');
const resolvers = require('./resolver');

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs: schemas,
        resolvers,
        context: getContext,
    });

    await server.start(); // Wait for server to initialize
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        logger.info(
            `Server ready at http://localhost:4000${server.graphqlPath}`
        );
    });
};

startServer();

