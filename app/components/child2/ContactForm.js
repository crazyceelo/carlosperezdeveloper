var React = require('react');
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class ContactForm extends React.Component {


    render(){
        return(
            // <!--Section: Contact v.2-->
            <section className="section">
            
                {/* <!--Section heading--> */}
                <h2 className="section-heading h1 pt-4 whiteText">Contact me</h2>
                {/* <!--Section description--> */}
                <p className="section-description whiteText">Feel free to ask my any questions.</p>
            
                <div className="row">
            
                    {/* <!--Grid column--> */}
                    <div className="col-md-8 col-xl-9">
                        <form id ="contact-form" name="contact-form" action="mail.php" method="POST">
            
                            {/* <!--Grid row--> */}
                            <div className="row">
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <div className="md-form">
                                            <input type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name" className="whiteText">Your name</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <div className="md-form">
                                            <input type="text" id="email" name="email" className="form-control" />
                                            <label htmlFor="email" className="whiteText">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
            
                            </div>
                            {/* <!--Grid row--> */}
            
                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label htmlFor="subject" className="whiteText">Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
            
                            {/* <!--Grid row--> */}
                            <div className="row">
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-12">
            
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" className="form-control" rows="5"></textarea>
                                        <div>
                                            <label htmlFor="message" className="whiteText">Your message</label>
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
            
                        </form>
            
                        <div className="center-on-small-only">
                            <button className="btn btn-primary" onClick="document.getElementById('contact-form').submit();">Send</button>
                        </div>
                        <div className="status" id="status"></div>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
            </section>
        )
    }
}