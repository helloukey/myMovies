const checkHeroTypography = () => {
  it("Check the typography of the hero", () => {
    cy.getCypress("hero-title").should("exist");
    cy.getCypress("hero-title").should("be.visible");
    cy.getCypress("hero-description").should("exist");
    cy.getCypress("hero-description").should("be.visible");
    cy.getCypress("hero-rating").should("exist");
    cy.getCypress("hero-rating").should("be.visible");
    cy.getCypress("hero-rating-container").should("exist");
    cy.getCypress("hero-rating-container").should("be.visible");
    cy.getCypress("hero-rating-reviews-count").should("exist");
    cy.getCypress("hero-rating-reviews-count").should("be.visible");
    cy.getCypress("hero-rating-reviews-count").should(
      "contain.text",
      "Reviews"
    );
    cy.getCypress("hero-season-certification-container").should("exist");
    cy.getCypress("hero-season-certification-container").should("be.visible");
  });
};

export { checkHeroTypography };
