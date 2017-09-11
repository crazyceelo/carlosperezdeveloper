var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class Navbar extends React.Component {


    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}