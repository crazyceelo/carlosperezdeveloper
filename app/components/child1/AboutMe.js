var React = require("react");
import { HashRouter, Route, Switch } from "react-router-dom";

export default class AboutMe extends React.Component {


    render(){
        return(
            <div>
                <a className="navbar-brand" href="#">About Me</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        )
    }
}