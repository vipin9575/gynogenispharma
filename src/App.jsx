import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import HeroSection from "./pages/HeroSection";
import HighlightsSection from "./pages/HighlightsSection";
import ParallaxSection from "./pages/ParallaxSection";
import AboutSection from "./pages/AboutSection";
import AboutPage from "./pages/AboutPage";
import CTASection from "./pages/CTASection";
import ProductsSection from "./pages/ProductsSection";
import FeaturesSection from "./pages/FeaturesSection";
import PregnancyParallaxSection from "./pages/PregnancyParallaxSection";
import HelpSection from "./pages/HelpSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import ProductPage from "./pages/ProductPage";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional
    });
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <HeroSection />
    <HighlightsSection />
    <ParallaxSection />
    <AboutSection />
    <CTASection />
    <ProductsSection />
    <FeaturesSection />
    {/* <PregnancyParallaxSection /> */}
    {/* <HelpSection /> */}
    <ContactSection />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
