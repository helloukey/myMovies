import { checkFooter } from "../../helpers/checkFooter";
import { checkHero } from "../../helpers/checkHero";
import { checkNavigation } from "../../helpers/checkNavigation";

describe("Check information page", () => {
  // Visit the home page
  beforeEach(() => {
    cy.visit("/");
    cy.getCypress("navigation-search").click();
    cy.getCypress("search-field-input").type("The Shawshank Redemption");
    cy.getCypress("card-listing-item").first().click();
  });

  // Get the content of the hero
  it("Check the content of the hero", () => {
    checkHero();
  });

  // Check the details tab
  it("Check the details tab", () => {
    cy.getCypress("details-tab-container").should("exist");
    cy.getCypress("details-tab-container").should("be.visible");
    cy.getCypress("details-tab-overview").should("exist");
    cy.getCypress("details-tab-overview").should("be.visible");
    cy.getCypress("details-tab-overview").should("have.class", "tab-active");
    cy.getCypress("details-tab-videos").should("exist");
    cy.getCypress("details-tab-videos").should("be.visible");
    cy.getCypress("details-tab-videos").click();
    cy.getCypress("details-tab-videos").should("have.class", "tab-active");
    cy.getCypress("details-tab-photos").should("exist");
    cy.getCypress("details-tab-photos").should("be.visible");
    cy.getCypress("details-tab-photos").click();
    cy.getCypress("details-tab-photos").should("have.class", "tab-active");
  });

  // Check the information summary
  it("Check the information summary", () => {
    cy.getCypress("information-headline").should("exist");
    cy.getCypress("information-headline").should("be.visible");
    cy.getCypress("information-headline").should("have.text", "Summary");
    cy.getCypress("information-overview").should("exist");
    cy.getCypress("information-overview").should("be.visible");
  });

  // Check the cast carousel
  it("Check the cast carousel", () => {
    cy.getCypress("cast-carousel-heading").should("exist");
    cy.getCypress("cast-carousel-heading").should("be.visible");
    cy.getCypress("cast-carousel-heading").should("have.text", "Cast");
    cy.getCypress("cast-carousel-items-container").should("exist");
    cy.getCypress("cast-carousel-items-container").should("be.visible");
    cy.getCypress("cast-carousel-item-link").should("exist");
    cy.getCypress("cast-carousel-item-link").should("be.visible");
    cy.getCypress("cast-carousel-item-link").first().click();
    cy.url().should("include", "/person");
  });

  // Check the similar carousel
  it("Check the similar carousel", () => {
    cy.getCypress("carousel-heading-text").should("exist");
    cy.getCypress("carousel-heading-text").should("be.visible");
    cy.getCypress("carousel-heading-text").should(
      "have.text",
      "More Like This"
    );
    cy.getCypress("carousel-items-container").should("exist");
    cy.getCypress("carousel-items-container").should("be.visible");
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
    cy.getCypress("carousel-item-link").first().click();
    cy.url().should("include", "/movies");
  });

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();
});

// Check details tab for show
describe("Check details for show", () => {
  // Visit the home page
  beforeEach(() => {
    cy.visit("/");
    cy.getCypress("navigation-search").click();
    cy.getCypress("search-field-input").type("Breaking Bad");
    cy.getCypress("card-listing-item").first().click();
  });

  // Check the details tab
  it("Check the details tab", () => {
    cy.getCypress("details-tab-container").should("exist");
    cy.getCypress("details-tab-container").should("be.visible");
    cy.getCypress("details-tab-overview").should("exist");
    cy.getCypress("details-tab-overview").should("be.visible");
    cy.getCypress("details-tab-overview").should("have.class", "tab-active");
    cy.getCypress("details-tab-episodes").should("exist");
    cy.getCypress("details-tab-episodes").should("be.visible");
    cy.getCypress("details-tab-episodes").click();
    cy.getCypress("details-tab-episodes").should("have.class", "tab-active");
    cy.getCypress("details-tab-videos").should("exist");
    cy.getCypress("details-tab-videos").should("be.visible");
    cy.getCypress("details-tab-videos").click();
    cy.getCypress("details-tab-videos").should("have.class", "tab-active");
    cy.getCypress("details-tab-photos").should("exist");
    cy.getCypress("details-tab-photos").should("be.visible");
    cy.getCypress("details-tab-photos").click();
    cy.getCypress("details-tab-photos").should("have.class", "tab-active");
  });
});
