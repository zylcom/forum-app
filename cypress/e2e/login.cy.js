/**
 * Scenario test
 *
 * - Login spec
 *  - should display login page correctly
 *  - should display alert when email is empty
 *  - should display alert when email not valid
 *  - should display alert when password is empty
 *  - should display alert when email and password are wrong
 *  - should display homepage when email and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should display login page correctly", () => {
    cy.get("h2").contains("Hello, welcome back.").should("be.visible");
    cy.get("input[placeholder='Email']").should("be.visible");
    cy.get("input[placeholder='Password']").should("be.visible");
    cy.get("button")
      .contains(/^Sign in$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.get("button")
      .contains(/^Sign in$/i)
      .click();

    // alert
    cy.contains("\"email\" is not allowed to be empty").should("be.visible");
  });

  it("should display alert when email not valid", () => {
    cy.get("input[placeholder='Email']").type("email");
    cy.get("button")
      .contains(/^Sign in$/i)
      .click();

    // alert
    cy.contains("\"email\" must be a valid email").should("be.visible");
  });

  it("should display alert when password is empty", () => {
    cy.get("input[placeholder='Email']").type("email@example.com");
    cy.get("button")
      .contains(/^Sign in$/i)
      .click();

    // alert
    cy.contains("\"password\" is not allowed to be empty").should("be.visible");
  });

  it("should display alert when email and password are wrong", () => {
    cy.get("input[placeholder='Email']").type("email@example.com");
    cy.get("input[placeholder='Password']").type("wrongpassword");
    cy.get("button")
      .contains(/^Sign in$/i)
      .click();

    // alert
    cy.contains("email or password is wrong").should("be.visible");
  });

  it("should display homepage when email and password are correct", () => {
    // login
    cy.get("input[placeholder='Email']").type("test@user.com");
    cy.get("input[placeholder='Password']").type("rahasia");
    cy.get("button")
      .contains(/^Sign in$/i)
      .click();
    cy.url().should("eq", "http://localhost:5173/");

    // open menu
    cy.get("label").children("svg").click();

    // verified menu shown in screen
    cy.get("a").contains("Create Thread").should("be.visible");
    cy.get("button").contains("Sign Out").should("be.visible");
  });
});
