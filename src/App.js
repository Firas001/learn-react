import React, { Component } from "react";
import Learn from "./components/test/Learn";
import Header from "./components/test/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Learn />
      </div>
    );
  }
}

export default App;
