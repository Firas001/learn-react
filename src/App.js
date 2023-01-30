// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Firas from "./pages/Firas";

// import components
import {
  Header,
  Hero,
  Features,
  NewItems,
  FeaturesSecond,
  Products,
  Testimonial,
  Newsletter,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
