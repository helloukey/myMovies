import { checkFooter } from "../../helpers/checkFooter";
import { checkNavigation } from "../../helpers/checkNavigation";
import { performLogin } from "../../helpers/performLogin";

describe("Check content of the account page", () => {
  // Visit the shows page
  beforeEach(() => {
    cy.visit("/account");
  });

  // Check the content of the login / register form
  it("Check login / register form", () => {
    cy.getCypress("account-card-image").should("exist");
    cy.getCypress("account-card-image").should("be.visible");
    cy.getCypress("account-card-container").should("exist");
    cy.getCypress("account-card-container").should("be.visible");
    cy.getCypress("account-card-page-switch").should("exist");
    cy.getCypress("account-card-page-switch").should("be.visible");
    cy.getCypress("account-card-page-switch").click();

    // Register card
    cy.getCypress("account-card-heading").should("exist");
    cy.getCypress("account-card-heading").should("be.visible");
    cy.getCypress("account-card-heading").should("have.text", "Register");
    cy.getCypress("account-card-first-name-label").should("exist");
    cy.getCypress("account-card-first-name-label").should("be.visible");
    cy.getCypress("account-card-first-name-label").should(
      "have.text",
      "First Name"
    );
    cy.getCypress("account-card-first-name-input").should("exist");
    cy.getCypress("account-card-first-name-input").should("be.visible");
    cy.getCypress("account-card-first-name-input").type("Kunal");
    cy.getCypress("account-card-email-label").should("exist");
    cy.getCypress("account-card-email-label").should("be.visible");
    cy.getCypress("account-card-email-label").should("have.text", "Email");
    cy.getCypress("account-card-email-input").should("exist");
    cy.getCypress("account-card-email-input").should("be.visible");
    cy.getCypress("account-card-email-input").type("kunal@test.com");
    cy.getCypress("account-card-password-label").should("exist");
    cy.getCypress("account-card-password-label").should("be.visible");
    cy.getCypress("account-card-password-label").should(
      "have.text",
      "Password"
    );
    cy.getCypress("account-card-password-input").should("exist");
    cy.getCypress("account-card-password-input").should("be.visible");
    cy.getCypress("account-card-password-input").type("test@123");
    cy.getCypress("account-card-register-button").should("exist");
    cy.getCypress("account-card-register-button").should("be.visible");
    cy.getCypress("account-card-register-button").should(
      "have.text",
      "Register"
    );
    cy.getCypress("account-card-register-button").click();
    cy.getCypress("account-card-register-error").should("exist");
    cy.getCypress("account-card-register-error").should("be.visible");
    cy.getCypress("account-card-register-error").should(
      "have.text",
      "Email already registered."
    );
    cy.getCypress("account-card-page-switch").click();

    // Login card
    cy.getCypress("account-card-heading").should("exist");
    cy.getCypress("account-card-heading").should("be.visible");
    cy.getCypress("account-card-heading").should("have.text", "Login");
    cy.getCypress("account-card-login-button").should("exist");
    cy.getCypress("account-card-login-button").should("be.visible");
    cy.getCypress("account-card-login-button").should("have.text", "Login");
    cy.getCypress("account-card-login-button").click();
  });
});

// Check the content after login
describe("Check content after login", () => {
  // Visit the shows page
  beforeEach(() => {
    cy.visit("/account");
    performLogin("kunal@test.com", "test@123");
  });

  // Check user profile
  it("Check user profile", () => {
    cy.getCypress("user-profile-image-container").should("exist");
    cy.getCypress("user-profile-image-container").should("be.visible");
    cy.getCypress("user-profile-heading").should("exist");
    cy.getCypress("user-profile-heading").should("be.visible");
    cy.getCypress("user-profile-heading").should("have.text", "Hi, Kunal");
    cy.getCypress("user-profile-description").should("exist");
    cy.getCypress("user-profile-description").should("be.visible");
    cy.getCypress("user-profile-description").should(
      "have.text",
      "Welcome to my-Movies!Your own personal collection store."
    );
    cy.getCypress("user-profile-logout-button").should("exist");
    cy.getCypress("user-profile-logout-button").should("be.visible");
    cy.getCypress("user-profile-logout-button").should("have.text", "Logout");
  });

  // Check user tabs
  it("Check user tabs", () => {
    cy.getCypress("user-profile-tabs-container").should("exist");
    cy.getCypress("user-profile-tabs-container").should("be.visible");
    cy.getCypress("user-profile-movies-tab").should("exist");
    cy.getCypress("user-profile-movies-tab").should("be.visible");
    cy.getCypress("user-profile-movies-tab").should("have.text", "MOVIES");
    cy.getCypress("user-profile-shows-tab").should("exist");
    cy.getCypress("user-profile-shows-tab").should("be.visible");
    cy.getCypress("user-profile-shows-tab").should("have.text", "SHOWS");
    cy.getCypress("user-profile-person-tab").should("exist");
    cy.getCypress("user-profile-person-tab").should("be.visible");
    cy.getCypress("user-profile-person-tab").should("have.text", "PERSON");
    cy.getCypress("user-profile-movies-tab").click();
    cy.getCypress("user-profile-movies-tab").should("have.class", "tab-active");
    cy.getCypress("user-profile-shows-tab").click();
    cy.getCypress("user-profile-shows-tab").should("have.class", "tab-active");
    cy.getCypress("user-profile-person-tab").click();
    cy.getCypress("user-profile-person-tab").should("have.class", "tab-active");
  });

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();

  // Logout
  it("Logout", () => {
    cy.getCypress("user-profile-logout-button").should("exist");
    cy.getCypress("user-profile-logout-button").should("be.visible");
    cy.getCypress("user-profile-logout-button").should("have.text", "Logout");
    cy.getCypress("user-profile-logout-button").click();
    cy.getCypress("account-card-image").should("exist");
    cy.getCypress("account-card-image").should("be.visible");
  });
});
