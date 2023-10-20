class loginPage{
    element={
        userName:()=> cy.get('#username > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click().type('demouser{enter}'),
        userPassword:()=> cy.get('#password > div > div.css-1wy0on6').click().type('testingisfun99{enter}'),
        submittClick:()=>    cy.get('[type="submit"]').click()
    }

    Pagelogin(){
        this.element.userName();
        this.element.userPassword();
        this.element.submittClick();
    }
}

module.exports=new loginPage();