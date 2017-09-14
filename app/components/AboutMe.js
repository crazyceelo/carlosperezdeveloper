var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import profileBackground from "../assets/images/profileBackground.jpg";

export default class AboutMe extends React.Component {
    

    render(){
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center">
                            <div className="card-header"></div>
                            <br />
                            <div className="row">
                                <div className="col-md-4"> 
                                    <img className="card-img-top profileBackground img-fluid" src={profileBackground} alt="Card image cap" />
                                </div>
                                <div className="col-md-8 card-body">
                                    <h1 className="card-title">Carlos Perez</h1>
                                    <p className="card-text">
                                        t is a long established fact that a reader will be distracted by the 
                                        readable content of a page when looking at its layout. The point of using 
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                        as opposed to using 'Content here, content here', making it look like readable 
                                        English. Many desktop publishing packages and web page editors now use Lorem 
                                        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
                                        many web sites still in their infancy. Various versions have evolved over 
                                        the years, sometimes by accident, sometimes on purpose (injected humour and 
                                        the like).</p>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                            git hub, linked in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}