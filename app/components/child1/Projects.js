var React = require("react");
import { HashRouter, Route, Link } from 'react-router-dom';
import landingPageBackground from "../../assets/images/landingPageBackground.jpg";

export default class Projects extends React.Component {
    constructor(){
        super()
        
        this.state = {
            // key: value,
            // key: ""
        }
    }

    render(){
        return(
            <div className="col">
                <Link to="/projects" > <p className="navbar-brand">Projects</p></Link>
            </div>
        )
    }
}


