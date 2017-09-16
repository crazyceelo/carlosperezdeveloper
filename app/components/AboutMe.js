var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import profileBackground from "../assets/images/profileBackground.jpg";
import linkedInLogo from "../assets/images/linkedInLogo.png";
import gitHubLogo from "../assets/images/gitHubLogo.png";
import stackOverflowLogo from "../assets/images/stackOverflowLogo.png";
import resumeLogo from "../assets/images/resumeLogo.png";
import resume from "../assets/documents/resume.pdf";

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
                  <h4>Introduction</h4>
                  <p className="text-left card-body">I excel in creating ideas, and then making them happen. I believe a good developer
                    should be able to do both back-end and front-end web develoment, which is precisely
                    what I do. After I create an idea, I like to choose the tech needed, and then depending
                    on the make-up of the team, I fill any front-end or back-end role needed. All in all, 
                    I love conceptualizing ideas, constructing them, and watching them go. 
                  </p>
                  <h4>Tech Skills</h4>
                  <p className="text-left card-body">React, HTML, CSS, Javascript, C#, Selenium, Node.js, npm, MySQL, Jquery, RESTful API(AJAX), Express, Handlebars, MongoDB</p>
                </div>
              </div>
                <div className="card-footer text-muted">
                  <div className="flex-lg-row d-flex justify-content-center">
                    <ul id="links">
                      <li>
                        <a className="" href="https://www.linkedin.com/in/carlos-perez-b091454/" target="_blank">
                          <img src={linkedInLogo} alt="Linked-in logo" className="imageLinks"/>
                        </a>
                      </li>
                      <li>
                        <a className="" href="https://github.com/crazyceelo" target="_blank">
                          <img src={gitHubLogo} alt="Github logo" className="imageLinks"/>
                        </a>
                      </li>
                      <li>
                        <a className="" href="https://stackoverflow.com/users/7455526/carlos-perez" target="_blank">
                          <img src={stackOverflowLogo} alt="Stack Overflow logo" className="imageLinks"/>
                        </a>
                      </li>
                      <li>
                        <a className="" href={resume} download>
                          <img src={resumeLogo} alt="Resume logo" className="imageLinks"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}