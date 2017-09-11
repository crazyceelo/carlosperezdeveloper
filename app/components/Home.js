var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import components
import Project1 from "./child1/Project1";
import Project2 from "./child1/Project2";


export default class Home extends React.Component {
    
    render(){
        return(
            <div className="row justify-content-start">
                <Project1 />
                <Project2 />
            </div>
        )
    }
}