var React = require("react");
import { HashRouter, Route, Switch } from "react-router-dom";

export default class Card2 extends React.Component {

    render(){
        return (
            <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Spot Me
                    </a>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body cookBookBackground">
                        <div className="border border-light backgroundColor">
                            <h5 className="card-body text-center">Link</h5>
                            <div className="text-center">
                                <a href="#/projects"> Click here to go to the web site</a>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Description</h5>
                            <div className="row">
                                <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry 
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard 
                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf 
                                    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla 
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore 
                                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic 
                                    synth nesciunt you probably haven't heard of them accusamus labore 
                                    sustainable VHS.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Technology</h5>
                            <p className="card-body">asdfasdfasdfasdaf asdf asdfasdf </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}