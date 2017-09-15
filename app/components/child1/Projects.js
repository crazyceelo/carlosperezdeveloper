var React = require("react");
import { HashRouter, Route, Link } from 'react-router-dom';
import background from "../../assets/images/background.jpg";

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


