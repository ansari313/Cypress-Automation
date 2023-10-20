/// <reference types ="cypress"/>

describe('CustomCommand',()=>{
   
    it ('test_1',()=>{

        cy.visit('http://autopract.com/')
        cy.get('.close > span').click()
        // cy.get('.owl-stage > :nth-child(1) > .product-box > app-product-box-one > :nth-child(1) > .product-detail > div[_ngcontent-serverapp-c1413062447=""] > a > h6').click({force:true})
       cy.clickLink('Trim Dress')
    cy.get('.product-right > h2').should('have.text','trim dress')
       // cy.get('body > app-root > app-fashion-one > section:nth-child(6) > div > div > div > owl-carousel-o > div > div.owl-stage-outer.ng-star-inserted > owl-stage > div > div > div:nth-child(1) > div > app-product-box-one > div > div.product-detail > div > a').click()
    })
})