import './commands/search-commands.js';

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('astra is not defined')) {
    return false;
  } else if(err.message.includes("Cannot read properties of undefined (reading 'publicPath')")){
    return false;
  } else if(err.message.includes("jetpackCarouselStrings is not defined")){
    return false;
  }
});