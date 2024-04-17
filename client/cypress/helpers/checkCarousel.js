const checkCarousel = (heading1, heading2, exploreButton) => {
  it("Check carousel of movies & shows", () => {
    cy.getCypress("carousel-heading-container").should("exist");
    cy.getCypress("carousel-heading-container").should("be.visible");
    cy.getCypress("carousel-heading-text").should("exist");
    cy.getCypress("carousel-heading-text").should("be.visible");
    if (heading1) {
      cy.getCypress("carousel-heading-text").should("contain.text", heading1);
    }
    if (heading2) {
      cy.getCypress("carousel-heading-text").should("contain.text", heading2);
    }
    if (exploreButton) {
      cy.getCypress("carousel-heading-explore-button").should("exist");
      cy.getCypress("carousel-heading-explore-button").should("be.visible");
      cy.getCypress("carousel-heading-explore-button").should(
        "contain.text",
        exploreButton
      );
    }
    cy.getCypress("carousel-items-container").should("exist");
    cy.getCypress("carousel-items-container").should("be.visible");
    cy.getCypress("carousel-items-container").find("img").should("exist");
    cy.getCypress("carousel-items-container").find("img").should("be.visible");
    cy.getCypress("carousel-item-link").should("exist");
    cy.getCypress("carousel-item-link").should("be.visible");
  });
};

export { checkCarousel };
