const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

     specPattern	: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
     supportFile : 'cypress/support/e2e.{js,jsx,ts,tsx}',

     env :{
      URL :"https://naveenautomationlabs.com/opencart/index.php"
    },

    trashAssetsBeforeRuns: true,
    fixturesFolder:"cypress/fixtures",
    downloadsFolder:"cypress/downloads",
    screenshotsFolder:"cypress/screenshots",
    screenshotOnRunFailure:false,
    video:false,  
    videosFolder:"cypress/videos",
    videoCompression: false,




    setupNodeEvents(on, config) {
      // implement node event listeners here

      const environmentName = config.env.environmentName || 'local';
      const environmentFilename = `./settings/${environmentName}.settings.json`;
      console.log('loading %s',environmentFileName);
      const settings=require(environmentFileName);

      if (settings.baseUrl)
      {
        config.baseUrl=settings.baseUrl
      }

      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      } 

      console.log('loaded settings for environment %s', environmentName)

      if (config.env.projectId)
      {
        config.projectId=config.env.projectId;
      }





      return config
     
    },
  },

  

});
