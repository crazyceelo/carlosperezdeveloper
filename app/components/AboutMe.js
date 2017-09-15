var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import profileBackground from "../assets/images/profileBackground.jpg";

export default class AboutMe extends React.Component {
    

    render(){
        return (
            <div>
                <br/>
                <div className="card text-center">
                <div className="card-header">
                  <h1 className="mt-0">Carlos Perez</h1>
                </div>
                <div className="media aboutMeBackground">
                <img className="d-flex align-self-start mr-3 profileBackground rounded-circle" src={profileBackground} alt="Generic placeholder image" />
                <div className="media-body backgroundColor">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
                <div className="card-footer text-muted">
                  link icon, link icon, link icon
                </div>
              </div>
            </div>
        )
    }
}