const checkHero = () => {
  it("Check the content of the hero", () => {
    cy.getCypress("hero-image-container").should("exist");
    cy.getCypress("hero-image-container").should("be.visible");
    cy.getCypress("hero-image-container").find("img").should("exist");
    cy.getCypress("hero-image-container").find("img").should("be.visible");
  });
};

export { checkHero };
