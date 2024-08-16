const { url } = require("@faker-js/faker");
// const cypress = require("cypress");
import { ENDPOINT_PREFIX } from "../config/constants"; 
import routes from "../config/routes";

class  LoginPage {


    open(endPoint){
        // let base=Cypress.env('URL')
        // cy.visit(Cypress.env('URL')+ENDPOINT_PREFIX+endPoint)
        //cy.visit(ENDPOINT_PREFIX+endPoint)
        cy.visit("?route=account/register");

    }

    openRegistrationPage(){
        this.open(routes.REGISTRATION_ENDPOINT);
     


    }



}
export default new LoginPage();