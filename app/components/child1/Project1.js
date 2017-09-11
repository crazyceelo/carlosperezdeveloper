var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import child 2
import Collapse1 from "../child2/Collapse1";

export default class Project1 extends React.Component {


    render(){
        return(
        <div>
            <div >
                <br />
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Project 1
                </button>
            </div>
            <Collapse1 />
        </div>
                
        )
    }
}


