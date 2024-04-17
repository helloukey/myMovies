const checkNavigation = () => {
  it("Check the navigation", () => {
    cy.getCypress("navigation-container").should("exist");
    cy.getCypress("navigation-container").should("be.visible");
    cy.getCypress("navigation-home").should("exist");
    cy.getCypress("navigation-home").should("be.visible");
    cy.getCypress("navigation-search").should("exist");
    cy.getCypress("navigation-search").should("be.visible");
    cy.getCypress("navigation-movies").should("exist");
    cy.getCypress("navigation-movies").should("be.visible");
    cy.getCypress("navigation-shows").should("exist");
    cy.getCypress("navigation-shows").should("be.visible");
    cy.getCypress("navigation-user").should("exist");
    cy.getCypress("navigation-user").should("be.visible");
  });
};

export { checkNavigation };
