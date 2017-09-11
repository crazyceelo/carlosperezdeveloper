var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// require Main.js
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";

module.exports = (
    <HashRouter > 
        <div>
            <Navbar />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
        </div>
    </HashRouter>
);