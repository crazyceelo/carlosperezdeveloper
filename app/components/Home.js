var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import components
import Project1 from "./child1/Project1";
import AboutMe from "./AboutMe";


export default class Home extends React.Component {
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Route path="/aboutme" component={AboutMe} />     
                        <Route path="/projects" component={Project1} />
                    </div>
                </div>
            </div>
        )
    }
}