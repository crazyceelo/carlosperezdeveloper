var React = require("react");
import { HashRouter, Route, Link } from 'react-router-dom';

export default class Projects extends React.Component {


    render(){
        return(
            <div className="col">
                <Link to="/projects" > <p className="navbar-brand">Projects</p></Link>
            </div>
        )
    }
}


