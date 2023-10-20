// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('h6').contains(label).click({force:true});
})

// login command

Cypress.Commands.add('Login',(username,password)=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()

})

//Multiple product selection 
Cypress.Commands.add("selectProducts", (productNames) => {
    // Visit the website
    cy.visit("https://www.bstackdemo.com/");
  
    // Loop through the product names and select them
    productNames.forEach((productName) => {
      cy.contains(productName).click();
    });
  });
  

