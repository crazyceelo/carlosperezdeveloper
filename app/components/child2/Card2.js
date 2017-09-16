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
                    <div className="card-body spotMeBackground">
                        <div className="border border-light backgroundColor">
                            <h5 className="card-body text-center">Link</h5>
                            <div className="text-center">
                                <a href="https://personal-trainer-apps.herokuapp.com/" target="_blank"> Click here to go to the web site</a>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Description</h5>
                            <div className="row">
                                <p className="card-body">Spot me is web site where a user can view independent
                                    personal trainers with specific specializations in your local area using a
                                    Zip Code. Users can search for any type of trainer and book them for a time,
                                    date, and place in order to start getting healthy and fit. This robust platform
                                    gives personal trainers and users more options that expand far beyond what any
                                    gym can offer. This is meant to be dynamic and custom for both the trainer 
                                    and the trainee. 
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Technology</h5>
                            <p className="card-body">MongoDB, Express, React, Node.js, Bootstrap, CSS </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}