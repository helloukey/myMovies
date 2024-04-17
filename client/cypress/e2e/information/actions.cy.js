describe("Play the trailer", () => {
  // Play the trailer
  it("Play the trailer", () => {
    cy.visit("/movies/157336");
    cy.getCypress("hero-mobile-play-button").should("exist");
    cy.getCypress("hero-mobile-play-button").should("be.visible");
    cy.getCypress("hero-mobile-play-button").click();
    cy.getCypress("hero-video-player").should("exist");
    cy.getCypress("hero-video-player").should("be.visible");
    cy.getCypress("hero-video-close-button").should("exist");
    cy.getCypress("hero-video-close-button").should("be.visible");
    cy.getCypress("hero-video-close-button").click();
  });

  // Check the videos tab
  it("Check the videos tab", () => {
    cy.visit("/movies/157336");
    cy.getCypress("details-tab-videos").should("exist");
    cy.getCypress("details-tab-videos").should("be.visible");
    cy.getCypress("details-tab-videos").click();
    cy.getCypress("details-videos-container").should("exist");
    cy.getCypress("details-videos-container").should("be.visible");
    cy.getCypress("details-videos-single").should("exist");
    cy.getCypress("details-videos-single").should("be.visible");
    cy.getCypress("details-videos-single").first().click();
  });

  // Check the photos tab
  it("Check the photos tab", () => {
    cy.visit("/movies/157336");
    cy.getCypress("details-tab-photos").should("exist");
    cy.getCypress("details-tab-photos").should("be.visible");
    cy.getCypress("details-tab-photos").click();
    cy.getCypress("details-photos-headline").should("exist");
    cy.getCypress("details-photos-headline").should("be.visible");
    cy.getCypress("details-photos-headline").should("have.text", "Backdrops");
    cy.getCypress("details-photos-container").should("exist");
    cy.getCypress("details-photos-container").should("be.visible");
    cy.getCypress("details-photos-single").should("exist");
    cy.getCypress("details-photos-single").should("be.visible");
    cy.getCypress("details-photos-single").first().click();
    cy.getCypress("details-photos-close").should("exist");
    cy.getCypress("details-photos-close").should("be.visible");
    cy.getCypress("details-photos-close").click();
  });

  // Check the episodes tab
  it("Check the episodes tab", () => {
    cy.visit("/shows/1396");
    cy.getCypress("details-tab-episodes").should("exist");
    cy.getCypress("details-tab-episodes").should("be.visible");
    cy.getCypress("details-tab-episodes").click();
    cy.getCypress("details-episodes-headline").should("exist");
    cy.getCypress("details-episodes-headline").should("be.visible");
    cy.getCypress("details-episodes-headline").should("have.text", "Episodes");
    cy.getCypress("details-episodes-container").should("exist");
    cy.getCypress("details-episodes-container").should("be.visible");
    cy.getCypress("details-episodes-single").should("exist");
    cy.getCypress("details-episodes-single").should("be.visible");
  });
});
