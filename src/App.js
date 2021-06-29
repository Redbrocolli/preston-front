import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import License from "./components/License/License";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <header>
          <header>
            <Header />
            <NavigationBar />
          </header>
          <main className="content">
            <div className="content container">
              <Router>
                <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path={"/about"} component={About} />
                  <Route exact path={"/products/:id"} component={Products} />
                  <Route exact path={"/product/:id"} component={Product} />
                  <Route exact path={"/contact"} component={Contact} />
                </Switch>
              </Router>
            </div>
          </main>
          <footer>
            <Footer />
            <License />
          </footer>
        </header>
      )}
    </div>
  );
}

export default App;
