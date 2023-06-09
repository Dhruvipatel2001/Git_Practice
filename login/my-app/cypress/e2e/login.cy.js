// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io') })
// })

//https://www.bstackdemo.com/signin/'
// require('Cypress-xpath'),

// it('BstackDemo successful login', () =>{
// cy.visit('https://www.bstackdemo.com/signin/')
// cy.get("#username").click();
// cy.xpath("//div[text()='demouser']").click();
// cy.get("#password").click();
// cy.xpath("//div[text()='testingisfun99']").click();
// cy.get("#login-btn").click();
// cy.get("#logout").should('have.text','Logout')
// cy.get("#logout").click();
// cy.get("#signin").should('have.text','Sign In')
// })

// it('BstackDemo failed login', () =>{
// cy.visit('https://www.bstackdemo.com/signin/')
// cy.get("#username").click();
// cy.xpath("//div[text()='demouser']").click();
// cy.get("#password").type('ddd{enter}');
// cy.xpath('//*[@id="login-btn"]').click()
// cy.get("#login-btn").click();
// cy.xpath('//*[@id="__next"]/div[2]/div').should('have.text','demouserdddLog InInvalid Password')
// cy.log('invalid password')
// })
// var expect =require('chai').expect
// ,foo='bar'
// ,object={tea:['chai','cofee']}
describe("my first test", () => {
  it("test 1 for sucessfull login", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Username");
    cy.get(":nth-child(1) > input").type("dhruvi");
    cy.get(":nth-child(1) > input").should("have.value", "dhruvi");
    cy.get(":nth-child(1) > input");
    cy.contains("Password");
    cy.get(":nth-child(2) > input").type("123");
    cy.get(":nth-child(2) > input").should("have.value", "123");
    // cy.get(":nth-child(2) > input").should("have.length",3);
    
    cy.contains("submit");
    cy.get("button").should("have.text", "submit");
    cy.get("button").click();
    cy.log("sucessful login");
  });
  it("test 2 for unsucessful login for empty username  ", () => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(2) > input").type("123");
    cy.get(":nth-child(1) > input").should("have.value", "");
    cy.get("button").click();

    cy.log("username can't be null");
  });

  it("test3 for unsucessful login for empty password", () => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(1) > input").type("dhruvi");
    cy.get(":nth-child(2) > input").should("have.value", "");
    cy.get("button").click();
    cy.log("password can't be null");
  });
});
