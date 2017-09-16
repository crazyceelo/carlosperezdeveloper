var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class Card1 extends React.Component {

    render(){
        return(
            <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cook Book
                        </a>
                    </h5>
                </div>    
                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body cookBookBackground">
                        <div className="border border-light backgroundColor">
                            <h5 className="card-body text-center">Link</h5>
                            <div className="text-center">
                                <a href="https://recipe-cookbook.herokuapp.com/" target="_blank"> Click here to go to the web site</a>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Description</h5>
                            <div className="row">
                                <p className="card-body">The Cook Book application makes it easy to
                                    enter customer recipe's and save them to your account. Other members
                                    can view your recipe's or create their own. This application is simple
                                    to use and is not riddled with menu's upon menu's. It is not required
                                    to be exact with measurements. 
                                </p>
                                <p className="card-body">
                                    The specific attribute that sets this recipe application apart from
                                    rest is that it sums up and displays nutritional values based on your
                                    uniquely created custom recipe. Each ingredient is calculated and displayed
                                    via a pie chart. 
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="border backgroundColor">
                            <h5 className="card-body text-center">Technology</h5>
                            <p className="card-body">HTML, CSS, Handlebars, MySQL, Node.js, Express, API </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}