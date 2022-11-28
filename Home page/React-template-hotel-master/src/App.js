import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Contact from "./views/Contact";
import Footer from "./assests/Footer/Footer";
import Navbar from "./assests/Navbar/Navbar";
import About from "./views/About";
import Details from "./views/Details";
import Home from "./views/Home";
import Listing from "./views/Listing";
function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/details" component={Details} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/listing" component={Listing} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;
