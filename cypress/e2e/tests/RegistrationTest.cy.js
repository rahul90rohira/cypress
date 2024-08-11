import LoginPage from "../pages/LoginPage";
import RegisterPage from  "../pages/RegisterPage"
import { faker } from '@faker-js/faker';



describe('Account Registration',{tags : ['@Register','@regression']},()=> {

beforeEach(()=>{
   LoginPage.openRegistrationPage();
});


   it('should register the new user',{tags:'@regression'},()=>{
      let password= faker.internet.password();

    //  cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
     RegisterPage
     .enterFirstName(faker.person.firstName())
     .enterLastName(faker.person.lastName())
     .enterEmail(faker.internet.email())
     .enterTelephone(faker.phone.number())
     .enterPassword(password)
     .enterConfirmPassword(password)
     .checkPolicy()
     .submitRegistration();
     
    
     cy.get('#content h1').should('have.text','Your Account Has Been Created!')




   }) 

   it.skip('should generate error message',{tags:"@regression"},()=>{
      RegisterPage.submitRegistration();

      RegisterPage.validateErrorInFormField();





   })

})