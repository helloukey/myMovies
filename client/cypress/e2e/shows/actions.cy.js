// Perform actions on the shows page
describe("Perform actions on the shows page", () => {
  // Visit the shows page
  beforeEach(() => {
    cy.visit("/shows");
  });

  // Get the search results
  it("Get the search results", () => {
    cy.getCypress("navigation-search").click();
    cy.getCypress("search-field-input").should("exist");
    cy.getCypress("search-field-input").should("be.visible");
    cy.getCypress("search-field-input").type("The Shawshank Redemption");
    cy.getCypress("listing-heading-text").should("exist");
    cy.getCypress("listing-heading-text").should("be.visible");
    cy.getCypress("listing-heading-text").should(
      "contain.text",
      "Results for: The Shawshank Redemption"
    );
    cy.url().should("include", "/search?q=The%20Shawshank%20Redemption");
    cy.getCypress("search-cancel-button").click();
    cy.url().should("eq", "http://localhost:3000/shows");
  });

  // Check the movies navigation
  it("Check the movies navigation", () => {
    cy.getCypress("navigation-movies").click();
    cy.getCypress("carousel-items-container").should("exist");
    cy.getCypress("carousel-items-container").should("be.visible");
    cy.url().should("include", "/movies");
    cy.go("back");
  });

  // Check the shows navigation
  it("Check the shows navigation", () => {
    cy.getCypress("navigation-shows").click();
    cy.getCypress("carousel-items-container").should("exist");
    cy.getCypress("carousel-items-container").should("be.visible");
    cy.url().should("include", "/shows");
    cy.go("back");
  });

  // Check the account navigation
  it("Check the account navigation", () => {
    cy.getCypress("navigation-user").click();
    cy.url().should("include", "/account");
    cy.go("back");
  });

  // Check the home navigation
  it("Check the home navigation", () => {
    cy.visit("/account");
    cy.getCypress("navigation-home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  // Check explore shows airing today button
  it("Check explore shows airing today button", () => {
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
    cy.getCypress("carousel-heading-explore-button").first().click();
    cy.getCypress("card-listing-item").should("exist");
    cy.getCypress("card-listing-item").should("be.visible");
    cy.url().should("include", "/category/airing-today");
    cy.go("back");
  });

  // Check explore shows on the air button
  it("Check explore shows on the air button", () => {
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
    cy.getCypress("carousel-heading-explore-button").last().click();
    cy.getCypress("card-listing-item").should("exist");
    cy.getCypress("card-listing-item").should("be.visible");
    cy.url().should("include", "/category/on-the-air");
    cy.go("back");
  });

  // Check the first show card
  it("Check the first show card", () => {
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
    cy.getCypress("carousel-item-link").first().click();
    cy.url().should("include", "/shows/");
    cy.go("back");
  });

  // Check the last show card
  it("Check the last show card", () => {
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
    cy.getCypress("carousel-item-link").last().click();
    cy.url().should("include", "/shows/");
    cy.go("back");
  });

  // Check @helloukey link
  it("Check @helloukey link", () => {
    cy.getCypress("footer-made-by-text").should("exist");
    cy.getCypress("footer-made-by-text").should("be.visible");
    cy.getCypress("footer-made-by-text")
      .find("a")
      .invoke("attr", "href")
      .should("eq", "https://github.com/helloukey");
  });

  // Check TMDB link
  it("Check TMDB link", () => {
    cy.getCypress("footer-data-by-text").should("exist");
    cy.getCypress("footer-data-by-text").should("be.visible");
    cy.getCypress("footer-data-by-text")
      .find("a")
      .invoke("attr", "href")
      .should("eq", "https://www.themoviedb.org/");
  });

  // Check the website link
  it("Check the website link", () => {
    cy.getCypress("footer-website-icon").should("exist");
    cy.getCypress("footer-website-icon").should("be.visible");
    cy.getCypress("footer-website-icon")
      .parent()
      .invoke("attr", "href")
      .should("eq", "https://kunalukey.com");
  });

  // Check the Github link
  it("Check the Github link", () => {
    cy.getCypress("footer-github-icon").should("exist");
    cy.getCypress("footer-github-icon").should("be.visible");
    cy.getCypress("footer-github-icon")
      .parent()
      .invoke("attr", "href")
      .should("eq", "https://github.com/helloukey");
  });

  // Check the LinkedIn link
  it("Check the LinkedIn link", () => {
    cy.getCypress("footer-linkedin-icon").should("exist");
    cy.getCypress("footer-linkedin-icon").should("be.visible");
    cy.getCypress("footer-linkedin-icon")
      .parent()
      .invoke("attr", "href")
      .should("eq", "https://www.linkedin.com/in/kunalukey/");
  });

  // Check the Youtube link
  it("Check the Youtube link", () => {
    cy.getCypress("footer-youtube-icon").should("exist");
    cy.getCypress("footer-youtube-icon").should("be.visible");
    cy.getCypress("footer-youtube-icon")
      .parent()
      .invoke("attr", "href")
      .should("eq", "https://youtube.com/c/techlenses");
  });

  // Check the mail link
  it("Check the mail link", () => {
    cy.getCypress("footer-mail-icon").should("exist");
    cy.getCypress("footer-mail-icon").should("be.visible");
    cy.getCypress("footer-mail-icon")
      .parent()
      .invoke("attr", "href")
      .should("eq", "mailto:kunalukey32@gmail.com");
  });
});
