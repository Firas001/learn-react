import { Header, Footer, Hero, Features, NewItems } from "./components/index";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
    </div>
  );
};

export default App;
