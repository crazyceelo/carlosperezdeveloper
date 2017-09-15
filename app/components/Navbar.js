var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import child components
import Projects from "./child1/Projects";
import AboutMe from "./child1/AboutMe";

export default class Navbar extends React.Component {


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <div className="row">
                        <AboutMe />
                        <Projects />
                    </div>
                </div>
            </nav>
        )
    }
}