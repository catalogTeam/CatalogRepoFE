/// <reference types="cypress" />

describe("login test", () => {
  it("put username and password in feilds", () => {
    cy.visit("http://localhost:3000/signup");

    cy.get("[id^=li_username]")
      .type("logintest")
      .should("have.value", "logintest");

    cy.get("[id^=li_password]").type("test").should("have.value", "test");
  });

  it("login to page", () => {
    cy.get("button[type=submitLogin]").click();

    cy.url().should("include", "/profile/logintest");

    cy.wait(10000)

    cy.get("h1[id^=bio]").should(($h) => {
      expect($h.first()).to.contain('test-bio')
    })
  });
});
