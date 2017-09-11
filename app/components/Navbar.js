var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class Navbar extends React.Component {


    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}