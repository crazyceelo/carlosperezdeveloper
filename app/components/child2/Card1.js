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