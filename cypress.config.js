const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // projectId: "",
  e2e: {

     specPattern	: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
     supportFile : 'cypress/support/e2e.{js,jsx,ts,tsx}',

     env :{
      baseUrl :"https://naveenautomationlabs.com/opencart/index.php"
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

      // -----BELOW CODE NOT WORKING TO PICK THE environment json file based on environment 
/*
      //Load the testing configuration and environment variables from separate JSON files.
      //we put the baseUrl and envionment specific config settings in settings/env.settings.json
      const environmentName = config.env.environmentName || 'local';
      const environmentFilename = `./settings/${environmentName}.settings.json`;
      console.log('loading %s', environmentFilename);
      const settings = require(environmentFilename);

      //overwriting the baseUrl from settings file to config
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }

      // Megring the configuration settings. 
      // If there are properties with the same name in both objects, the ones from settings.env will overwrite those in config.env.
      // If there are unique properties in either object, they will also be included in the merged config.env.
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }
      console.log('loaded settings for environment %s', environmentName);
      */

      const version = config.env.environmentName || 'local'

      const urls = {
        local: "https://naveenautomationlabs.com/opencart/index.php",
        staging: "https://stage.naveenautomationlabs.com/opencart/index.php",
        prod: "https://prod.naveenautomationlabs.com/opencart/index.php"
      }

      // choosing version from urls object
      config.baseUrl = urls[version]

      

      if (config.env.projectId)
      {
        config.projectId=config.env.projectId;
      }





      return config
     
    },
  },

  

});
