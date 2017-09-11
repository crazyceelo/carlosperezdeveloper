var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import profileBackground from "../assets/images/profileBackground.jpg";

export default class AboutMe extends React.Component {
    

    render(){
        return (
            <div className="card bg-dark text-white">
            <img className="card-img profileBackground" src={profileBackground} alt="Card image" />
            <div className="card-img-overlay">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        )
    }
}