const checkFooter = () => {
  it("Check the footer", () => {
    cy.getCypress("footer-container").should("exist");
    cy.getCypress("footer-container").should("be.visible");
    cy.getCypress("footer-text-container").should("exist");
    cy.getCypress("footer-text-container").should("be.visible");
    cy.getCypress("footer-copyright-text").should("exist");
    cy.getCypress("footer-copyright-text").should("be.visible");
    cy.getCypress("footer-copyright-text").should(
      "contain.text",
      "Copyright ©"
    );
    cy.getCypress("footer-made-by-text").should("exist");
    cy.getCypress("footer-made-by-text").should("be.visible");
    cy.getCypress("footer-made-by-text").should(
      "contain.text",
      "Made with ❤ @helloukey"
    );
    cy.getCypress("footer-data-by-text").should("exist");
    cy.getCypress("footer-data-by-text").should("be.visible");
    cy.getCypress("footer-data-by-text").should(
      "contain.text",
      "Data provided by - TMDB"
    );
    cy.getCypress("footer-social-links-container").should("exist");
    cy.getCypress("footer-social-links-container").should("be.visible");
    cy.getCypress("footer-website-icon").should("exist");
    cy.getCypress("footer-website-icon").should("be.visible");
    cy.getCypress("footer-github-icon").should("exist");
    cy.getCypress("footer-github-icon").should("be.visible");
    cy.getCypress("footer-linkedin-icon").should("exist");
    cy.getCypress("footer-linkedin-icon").should("be.visible");
    cy.getCypress("footer-youtube-icon").should("exist");
    cy.getCypress("footer-youtube-icon").should("be.visible");
    cy.getCypress("footer-mail-icon").should("exist");
    cy.getCypress("footer-mail-icon").should("be.visible");
  });
};

export { checkFooter };
