var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

import Projects from "./child1/Projects";

export default class Navbar extends React.Component {


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Projects />
                <a className="navbar-brand" href="#">About Me</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}