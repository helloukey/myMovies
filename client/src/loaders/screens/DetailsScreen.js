import Carousel from "../partials/Carousel";
import Details from "../partials/Details";
import Footer from "../partials/Footer";
import Hero from "../partials/Hero";
import Tabs from "../partials/Tabs";

const DetailsScreen = () => {
  return (
    <div className="w-full pb-12">
      
      {/* Hero Container */}
      <Hero />

      {/* Tabs */}
      <Tabs />

      {/* Details */}
      <Details />

      {/* Carousels */}
      <Carousel />

      {/* Carousels */}
      <Carousel />

      {/* Footer */}
      <Footer />

    </div>
  );
};
export default DetailsScreen;
