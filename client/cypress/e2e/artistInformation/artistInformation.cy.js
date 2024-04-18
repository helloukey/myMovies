import { checkFooter } from "../../helpers/checkFooter";
import { checkNavigation } from "../../helpers/checkNavigation";

describe("Check artist information page", () => {
  // Visit the artist page
  beforeEach(() => {
    cy.visit("/person/380");
  });

  // Check artist content & information
  it("Check artist content & information", () => {
    cy.getCypress("artist-image").should("exist");
    cy.getCypress("artist-image").should("be.visible");
    cy.getCypress("artist-name").should("exist");
    cy.getCypress("artist-name").should("be.visible");
    cy.getCypress("artist-name").should("have.text", "Robert De Niro");
    cy.getCypress("artist-biography").should("exist");
    cy.getCypress("artist-biography").should("be.visible");
    cy.getCypress("artist-biography").should(
      "contain.text",
      "Robert Anthony De Niro"
    );
    cy.getCypress("artist-known-for").should("exist");
    cy.getCypress("artist-known-for").should("be.visible");
    cy.getCypress("artist-known-for").should("have.text", "Acting");
  });

  // Check artist tabs
  it("Check artist tabs", () => {
    cy.getCypress("artist-tabs-container").should("exist");
    cy.getCypress("artist-tabs-container").should("be.visible");
    cy.getCypress("artist-known-for-tab").should("exist");
    cy.getCypress("artist-known-for-tab").should("be.visible");
    cy.getCypress("artist-known-for-tab").should("have.text", "KNOWN FOR");
    cy.getCypress("artist-known-for-tab").should("have.class", "tab-active");
    cy.getCypress("artist-credits-tab").should("exist");
    cy.getCypress("artist-credits-tab").should("be.visible");
    cy.getCypress("artist-credits-tab").should("have.text", "CREDITS");
    cy.getCypress("artist-credits-tab").click();
    cy.getCypress("artist-credits-tab").should("have.class", "tab-active");
    cy.getCypress("artist-photos-tab").should("exist");
    cy.getCypress("artist-photos-tab").should("be.visible");
    cy.getCypress("artist-photos-tab").should("have.text", "PHOTOS");
    cy.getCypress("artist-photos-tab").click();
    cy.getCypress("artist-photos-tab").should("have.class", "tab-active");
  });

  // Check artist known for listing
  it("Check artist known for listing", () => {
    cy.getCypress("artist-tabs-container").should("exist");
    cy.getCypress("artist-tabs-container").should("be.visible");
    cy.getCypress("artist-known-for-tab").should("exist");
    cy.getCypress("artist-known-for-tab").should("be.visible");
    cy.getCypress("artist-known-for-tab").click();
    cy.getCypress("card-listing-item").should("exist");
    cy.getCypress("card-listing-item").should("be.visible");
    cy.getCypress("card-listing-item").first().click();
    cy.url().should("match", /\/movies\/|\/shows\//);
  });

  // Check artist credits listing
  it("Check artist credits listing", () => {
    cy.getCypress("artist-tabs-container").should("exist");
    cy.getCypress("artist-tabs-container").should("be.visible");
    cy.getCypress("artist-credits-tab").should("exist");
    cy.getCypress("artist-credits-tab").should("be.visible");
    cy.getCypress("artist-credits-tab").click();
    cy.getCypress("artist-credit-department").should("exist");
    cy.getCypress("artist-credit-department").should("be.visible");
    cy.getCypress("artist-credit-department").should("have.text", "Department");
    cy.getCypress("artist-credit-media").should("exist");
    cy.getCypress("artist-credit-media").should("be.visible");
    cy.getCypress("artist-credit-media").should("have.text", "Media");
  });

  // Check artist photos listing
  it("Check artist photos listing", () => {
    cy.getCypress("artist-tabs-container").should("exist");
    cy.getCypress("artist-tabs-container").should("be.visible");
    cy.getCypress("artist-photos-tab").should("exist");
    cy.getCypress("artist-photos-tab").should("be.visible");
    cy.getCypress("artist-photos-tab").click();
    cy.getCypress("artist-photos-headline").should("exist");
    cy.getCypress("artist-photos-headline").should("be.visible");
    cy.getCypress("artist-photos-headline").should("have.text", "Photos");
    cy.getCypress("artist-photos-container").should("exist");
    cy.getCypress("artist-photos-container").should("be.visible");
    cy.getCypress("artist-photos-single").should("exist");
    cy.getCypress("artist-photos-single").should("be.visible");
    cy.getCypress("artist-photos-single").first().click();
    cy.getCypress("artist-photos-close").should("exist");
    cy.getCypress("artist-photos-close").should("be.visible");
    cy.getCypress("artist-photos-close").click();
  });

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();
});
