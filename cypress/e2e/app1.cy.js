/// <reference types ="cypress"/>
describe("template spec", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

it.only('wait command',function(){
cy.visit('https://www.demoblaze.com/')
cy.wait(4000)
cy.get('.list-group').find('a').contains('Laptops').click()
})

it.skip('alise and fixture data pass form file to text area',()=>{
  cy.visit("https://demoqa.com/automation-practice-form");
  cy.fixture("example").as("userdata")
  cy.get('@userdata').then(data=>{

    cy.get('#firstName').type(data.username)
    cy.get('#lastName').type(data.lastname)
    cy.get('[placeholder="Mobile Number"]').type(data.mob)
  })
})

  it.skip('Iterating Through Web Elements',()=>{
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('#hobbiesWrapper').each(eachcheckbox=>{
      cy.wrap(eachcheckbox).find('[type="checkbox"]').check({force:true})
    })

  })

  it.skip("JQuery assertion", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('[id="userName-label"]').then($label=>{
      expect($label.text()).to.equal('Name')
    })
  });

  it.skip("invoke", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('[id="userName-label"]')
      .invoke("text")
      .then((labelText) => {
        expect(labelText).to.eq("Name");
      });
    cy.get("#userNumber")
      .invoke("attr", "id")
      .then((webIdElement) => {
        expect(webIdElement).to.eq("userNumber");
      })
      .type("0980000088");
  });

  it.skip("wrap method", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('[id="userName-label"]').then((textlabel) => {
      cy.wrap(textlabel).should("contain", "Name");
    });
  });

  it.skip("yield subject from commands", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('[id="userName-label"]').then((label) => {
      expect(label.text()).to.eq("Name");
    });
  });

  it.skip("test_1", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#firstName").type("jack");
    cy.get("#lastName").type("sahb");
    cy.get("#userEmail").type("jack@gmail.com");
    cy.get(
      "#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
    ).click();
    cy.get('input[placeholder="Mobile Number"]').type("+91-2993489");
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("2001");
    cy.get(".react-datepicker__month-select").select("March");
    cy.get(
      "#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(4) > div.react-datepicker__day.react-datepicker__day--019"
    ).click();
    // cy.get('#app > div > div > div.row > div:nth-child(3)').click()
    cy.get(
      "#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3"
    ).type("Math{enter}");
    cy.get(
      "#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label"
    ).click();
    cy.get("#currentAddress").type("Ghakkahr");
    cy.get("#stateCity-wrapper").find('[id="state"]');
    // cy.get("#userForm").find('div').first()
    // cy.get('#userForm').find('div').last()
  });

  // then() related project

  it.skip("visit site", () => {
    cy.visit("http://www.autopract.com/#/home/fashion");
    cy.get(
      "body > ngb-modal-window > div > div > div > div > div > div > div > div > button"
    )
      .as("Popup")
      .click();
  });
  // it('Should click POPUP',function(){
  //     this.Popup.click()

  // })

  it.skip("Log Price And Verify Dress Name", () => {
    cy.get(
      "body > app-root:nth-child(1) > app-fashion-one:nth-child(3) > section:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > owl-carousel-o:nth-child(1) > div:nth-child(1) > div:nth-child(1) > owl-stage:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-product-box-one:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(4)"
    ).as("Dress");
    cy.get("@Dress").then(($Price) => {
      const Dprice = $Price.text();
      cy.log(Dprice);
      expect(Dprice).to.equal(" $87.00  $145.00");
    });
  });

});