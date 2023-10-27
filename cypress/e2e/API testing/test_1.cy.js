/// <reference types ="cypress"/>

/// <reference types ="cypress"/>
describe('template spec', () => {
    it('passes', () => {
    //Getting response from BrowserStack demo website
    cy.request('GET','https://www.bstackdemo.com/')
    })

    it("POST Update",()=>{
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
            title: 'POST with Cypress',
            body: 'This is cypress with API testing',
            userId:1
        }).as('creatData')
    
        cy.get('@creatData').then((res)=>{
            expect(res.body.title).to.eql('POST with Cypress')
                })
    })
    })