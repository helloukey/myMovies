import { checkCarousel } from "../../helpers/checkCarousel";
import { checkFooter } from "../../helpers/checkFooter";
import { checkHero } from "../../helpers/checkHero";
import { checkHeroTypography } from "../../helpers/checkHeroTypography";
import { checkNavigation } from "../../helpers/checkNavigation";

describe("Check content of the shows page", () => {
  // Visit the shows page
  beforeEach(() => {
    cy.visit("/shows");
  });

  // Check the content of the hero
  checkHero();

  // Check the typography of the hero
  checkHeroTypography();

  // Check carousel of shows
  checkCarousel("Shows Airing Today", "Popular Shows", "Explore All");

  // Check carousel of shows
  checkCarousel("Top-Rated Shows", "Shows On The Air", "Explore All");

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();
});
