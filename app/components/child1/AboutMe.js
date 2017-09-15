var React = require("react");
import { HashRouter, Route, Link } from "react-router-dom";

export default class AboutMe extends React.Component {


    render(){
        return(
            <div className="col">
                <Link to="/" ><p className="navbar-brand">About Me</p></Link>
            </div>
        )
    }
}