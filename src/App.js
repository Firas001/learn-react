import {
  Header,
  Hero,
  Features,
  NewItems,
  FeaturesSecond,
  Products,
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
    </div>
  );
};

export default App;
