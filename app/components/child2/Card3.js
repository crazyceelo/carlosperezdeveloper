var React = require("react");
import { HashRouter, Route, Switch } from "react-router-dom";

export default class Card3 extends React.Component {

    render(){
        return (
            <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Crystal Collector
                    </a>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body crystalCollectorBackground">
                        <div className="border border-light backgroundColor">
                            <h5 className="card-body text-center">Link</h5>
                            <div className="text-center">
                                <div>
                                    <a href="https://crazyceelo.github.io/week-4-game/" target="_blank"> Click here to go to the web site</a>
                                </div>
                                <br />
                                <div>
                                    <a href="https://github.com/crazyceelo/week-4-game" target="_blank"> Click here to view the project Github</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Description</h5>
                            <div className="row">
                                <p className="card-body">You win the game by matching your total score 
                                    to the random number generated. Each crystal contains a random number
                                    for each new game session. The challenge is to discover how much each 
                                    crystal is worth and attempt to match the random number in order to win.
                                    If you do not match the number, you lose. 
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Technology</h5>
                            <p className="card-body">HTML, CSS, Javascript, Bootstrap </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}