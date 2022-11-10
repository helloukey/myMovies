import Carousel from "../partials/Carousel";
import Footer from "../partials/Footer";
import Hero from "../partials/Hero";

const MainScreen = () => {
  return (
    <div className="w-full pb-12">
      
      {/* Hero Container */}
      <Hero />

      {/* Carousels */}
      <Carousel />

      {/* Carousels */}
      <Carousel />

      {/* Footer */}
      <Footer />

    </div>
  );
};
export default MainScreen;
