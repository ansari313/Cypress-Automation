/// <reference types ="cypress"/>

import homePage from "../../POM/homePage"
import loginPage from "../../POM/loginPage"
describe('Describe login test',()=>{
//     it('login',()=>{
        
//     cy.visit('https://www.bstackdemo.com/signin')
  
//     cy.get('#username > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click().type('demouser{enter}')
//    cy.get('#password > div > div.css-1wy0on6').click().type('testingisfun99{enter}')
//    cy.get('[type="submit"]').click()
//     })


it('POM_test_1',()=>{
    cy.visit('https://www.bstackdemo.com/')
    homePage.clickSignin();
    loginPage.Pagelogin();

})
})