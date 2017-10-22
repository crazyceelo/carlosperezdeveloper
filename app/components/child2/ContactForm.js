var React = require('react');
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class ContactForm extends React.Component {


    render(){
        return(
            // <!--Section: Contact v.2-->
            <section className="section">
            
                {/* <!--Section heading--> */}
                <h2 className="section-heading h1 pt-4">Contact us</h2>
                {/* <!--Section description--> */}
                <p className="section-description">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within matter of hours to help you.</p>
            
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
                                            <label htmlFor="name" className="">Your name</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <div className="md-form">
                                            <input type="text" id="email" name="email" className="form-control" />
                                            <label htmlFor="email" className="">Your email</label>
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
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
            
                            {/* <!--Grid row--> */}
                            <div className="row">
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-12">
            
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" className="md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
            
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
            
                        </form>
            
                        <div className="center-on-small-only">
                            <a className="btn btn-primary" onClick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status" id="status"></div>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
            </section>
        )
    }
}