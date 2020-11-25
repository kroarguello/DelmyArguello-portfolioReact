import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Porfolio from "./pages/Porfolio";
import About from "./pages/About";
import Contactme from "./pages/Contactme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/porfolio" component={Porfolio} />
          <Route exact path="/contactme" component={Contactme} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
