import { checkCarousel } from "../../helpers/checkCarousel";
import { checkFooter } from "../../helpers/checkFooter";
import { checkHero } from "../../helpers/checkHero";
import { checkHeroTypography } from "../../helpers/checkHeroTypography";
import { checkNavigation } from "../../helpers/checkNavigation";

describe("Check content of the movies page", () => {
  // Visit the movies page
  beforeEach(() => {
    cy.visit("/movies");
  });

  // Check the content of the hero
  checkHero();

  // Check the typography of the hero
  checkHeroTypography();

  // Check carousel of movies & shows
  checkCarousel("Movies Now Playing", "Popular Movies", "Explore All");

  // Check carousel of movies & shows
  checkCarousel("Top-Rated Movies", "Upcoming Movies", "Explore All");

  // Check the footer
  checkFooter();

  // Check the navigation
  checkNavigation();
});
