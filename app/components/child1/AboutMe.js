var React = require("react");
import { HashRouter, Route, Switch } from "react-router-dom";

export default class AboutMe extends React.Component {


    render(){
        return(
            <div className="col">
                <a className="navbar-brand" href="#">About Me</a>
            </div>
        )
    }
}