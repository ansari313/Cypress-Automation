class homePage{
    
    element={
        signinBtn :()=> cy.get('#signin')

    }

    clickSignin(){
        this.element.signinBtn().click()
    }
} 

module.exports= new homePage();