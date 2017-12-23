var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import components
import ProjectPage from "./child1/ProjectPage";
import AboutMe from "./AboutMe";
import ContactForm from "./child2/ContactForm";


export default class Home extends React.Component {
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Route exact path="/" component={AboutMe} />     
                        <Route path="/projects" component={ProjectPage} />
                        <Route path="/contact" component={ContactForm} />
                    </div>
                </div>
            </div>
        )
    }
}