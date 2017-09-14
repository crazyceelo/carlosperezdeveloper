var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import child 2
import Collapse1 from "../child2/Collapse1";
import Collapse2 from "../child2/Collapse2";

export default class Project1 extends React.Component {


    render(){
        return(
            <div>
                <br />
                <div className="row justify-content-start">
                    <p  className="col-3">
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Project 1
                        </button>
                    </p>
                    <p className="col-3">
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            Project 2
                        </button>
                    </p>
                    <Collapse1 />
                    <Collapse2 />
                </div>
            </div>
                
        )
    }
}


