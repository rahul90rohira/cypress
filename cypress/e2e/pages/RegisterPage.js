import { ERROR_MESSAGE } from "../config/errormsg"


class RegisterPage {


get firstNameInput(){ return cy.get("#input-firstname")}
get lastNameInput() {return cy.get('#input-lastname')}
get emailInput() {return cy.get('#input-email')}
get telephoneInput() { return cy.get('#input-telephone')}
get passwordInput() {return  cy.get('#input-password') }
get confirmPasswordInput() {return cy.get('#input-confirm')}
get PolicyCheckBox() {return cy.get('input[type="checkbox"]')}
get submitButton() {return cy.get('input[type="submit"]')}
get actualErrorMessage() {return cy.get('.text-danger')}



enterFirstName(username){
    this.firstNameInput.type(username);
    return this;
}

enterLastName(lastName){
    this.lastNameInput.type(lastName);
    return this ;
}

enterEmail(email){
    this.emailInput.type(email);
    return this;
}

enterTelephone(telephone){
    this.telephoneInput.type(telephone);
    return this;
}

enterPassword(password){
    this.passwordInput.type(password);
    return this;
}

enterConfirmPassword(password){
    this.confirmPasswordInput.type(password);
    return this;
}

 checkPolicy(){
    this.PolicyCheckBox.check();
    return this;
}

submitRegistration(){
    this.submitButton.click();
    return this;
}

validateErrorInFormField(){

   this.actualErrorMessage
   .first()
   .should('have.text',ERROR_MESSAGE.FIRSTNAME)
   .next()
   .should('have.text',ERROR_MESSAGE.LASTNAME)
   .next()
   .should('have.text',ERROR_MESSAGE.EMAIL)


    }
    

}




export default new RegisterPage();