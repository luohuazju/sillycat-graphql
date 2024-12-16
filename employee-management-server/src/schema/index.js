const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

// Load all .graphql files from the "schemas" folder
const typesArray = loadFilesSync(path.join(__dirname, '../schema/**/*.graphql'));
// Merge all loaded type definitions
const typeDefs = mergeTypeDefs(typesArray);

module.exports = typeDefs;
