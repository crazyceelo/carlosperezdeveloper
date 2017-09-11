var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import components
import Project1 from "./child1/Project1";
import Project2 from "./child1/Project2";


export default class Home extends React.Component {
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <Project1 />
                    </div>
                </div>
                <div>
                    <Project2 />
                </div>
            </div>
        )
    }
}