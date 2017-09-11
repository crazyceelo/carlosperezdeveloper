var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// require Main.js
import Home from "../components/Home";

module.exports = (
    <HashRouter > 
        <div>
            <Switch>
                <Route path="/" component={Home} /> 
            </Switch>
        </div>
    </HashRouter>
);