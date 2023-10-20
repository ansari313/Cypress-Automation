/// <reference types ="cypress"/>

describe ('Custom Command',()=>{
    it('test_1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.Login('Admin','admin123')

    })
})