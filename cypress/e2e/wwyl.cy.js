/// <reference types ="cypress"/>

describe('Test',()=>{

    it('',()=>{
        cy.visit('https://www.wearwhatyoulove.com/')
        cy.get('#post-14884 > div > div > div.elementor-element.elementor-element-32e0463.e-flex.e-con-boxed.e-con.e-parent > div > div.elementor-element.elementor-element-f89e346.e-flex.e-con-boxed.e-con.e-child > div > a.elementor-element.elementor-element-cd170a8.e-con-full.e-flex.e-con.e-child > div.elementor-element.elementor-element-15cfd7a.elementor-widget.elementor-widget-image > div > img')
        .click()
//ORANGE
        cy.get('.post-11844 > .product-wrapper > .product-element-top > .product-image-link > .attachment-woocommerce_thumbnail')
        .click()
        cy.get('.woocommerce-product-gallery__wrapper > .owl-nav > .owl-next').click()
        cy.wait(3000)
        cy.get('.woocommerce-product-gallery__wrapper > .owl-nav > .owl-prev').click()
        cy.go(-1)
//
    })
})