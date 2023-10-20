describe("Select Multiple Products", () => {
    it("should select multiple products", () => {
      // Define an array of product names you want to select
      const productsToSelect = ['#\x34 > .shelf-item__buy-btn'];
  
      // Use the custom command to select the products
      cy.selectProducts(productsToSelect);
  
      // You can add assertions or additional test steps here
    });
  });
  

  