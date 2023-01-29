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
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
