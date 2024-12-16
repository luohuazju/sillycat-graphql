const { logger } = require('./logger');

const getContext = context => { 
    return {
      context
    };
};
  
module.exports = {
    getContext
}
