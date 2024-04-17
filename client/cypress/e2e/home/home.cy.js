import { checkCarousel } from "../../helpers/checkCarousel";
import { checkFooter } from "../../helpers/checkFooter";
import { checkHero } from "../../helpers/checkHero";
import { checkHeroTypography } from "../../helpers/checkHeroTypography";
import { checkNavigation } from "../../helpers/checkNavigation";

describe("Check content of the homepage", () => {
  // Visit the landing page
  beforeEach(() => {
    cy.visit("/");
  });

  // Check the content of the hero
  checkHero();

  // Check the typography of the hero
  checkHeroTypography();

  // Check carousel of movies & shows
  checkCarousel("Trending Movies", "Trending Shows", "Explore All");

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();
});
