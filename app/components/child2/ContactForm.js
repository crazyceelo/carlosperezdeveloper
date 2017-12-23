var React = require('react');
import { HashRouter, Route, Switch } from 'react-router-dom';
import helper from '../utils/helper';

export default class ContactForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            value: '',
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        jQuery('body > #recaptcha_script').remove();
        jQuery('head > #recaptcha_script').remove();
    }

    componentDidMount(){
        // an array of key value pairs
        const scripts = [{
            src: 'https://www.google.com/recaptcha/api.js',
            type: 'text/javascript'
        }];
        
        // goes through each object puts it in the script tag and then 
        // mounts to the body
        scripts.forEach((source) => {
            const script = document.createElement('script');
            script.src = source.src;
            script.type = source.type;
            script.id = 'recaptcha_script';
            document.body.appendChild(script);
            // console.log(script);
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(value);
    }

    handleSubmit(event) {
        // prevent the default button behaviour
        event.preventDefault();

        // pass in form data
        // console.log(`name: ${this.state.name}`);
        // console.log(`email: ${this.state.email}`);
        // console.log(`subject: ${this.state.subject}`);
        // console.log(`message: ${this.state.message}`);
        var contactData = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
            captcha: grecaptcha.getResponse()
        };
        var name = this.state.name;
        var email = this.state.email;
        var subject = this.state.subject;
        var message = this.state.message;
        var captcha = grecaptcha.getResponse();
        // console.log(captcha);

        //Status code validation form process window
        $('.form-process').css('display', 'block');
        $('#contactstatus').css('color', '#00B4E2');
        $('#contactstatus').css('background-image', 'url("/../../assets/images/preloader.gif")');
        $('#contactstatus').text('Please wait, your message is being sent...');

        // make api call to google
        $.ajax({
            url: '/api-contact',
            method: 'POST',
            data: contactData,
            success: ()=>{
                $('.form-process').css('background-image','none');
                $('#contactstatus').css('color', 'green');
                $('#contactstatus').text('Thank you. Message successfully sent');
                $('.form-process').stop().fadeOut(5200);
                grecaptcha.reset();
                // reset form fields to '';
                this.setState({
                    name:'',
                    email:'',
                    message:'',
                    subject:''
                })
            },
            error: (response) => {
                $('#contactstatus').css('color', 'red');
                $('.form-process').css('background-image','none');
                $('#contactstatus').text(response.responseText);
                $('.form-process').stop().fadeOut(5200);
                grecaptcha.reset();
            }
        });
        
        // passes it to axios and makes the data available through the '/api-contact' in AJAX
        helper.postContactForm(
            name,
            email,
            subject,
            message
        )
    }

    render(){
        return(
            // <!--Section: Contact v.2-->
            <section className="section">
            
                {/* <!--Section heading--> */}
                <h2 className="section-heading h1 pt-4 whiteText">Contact me</h2>
                {/* <!--Section description--> */}
                <p className="section-description whiteText">Feel free to ask my any questions.</p>

                {/* status code form process */}
                <div className="form-process align-items-center"><h4 id="contactstatus"></h4></div>

                <div className="row">
            
                    {/* <!--Grid column--> */}
                    <div className="col-md-8 col-xl-9">
                        <form onSubmit={this.handleSubmit} id="contact-form" name="contact-form" action="mail.php" method="POST">
            
                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <div className="md-form">
                                            <input type="text" id="name" name="name" value={this.state.name} className="form-control" onChange={this.handleChange} required />
                                            <label htmlFor="name" className="whiteText">Your name</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
            
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <div className="md-form">
                                            <input type="email" id="email" name="email" value={this.state.email} className="form-control" onChange={this.handleChange} required/>
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
                                        <input type="text" id="subject" name="subject" value={this.state.subject} className="form-control" onChange={this.handleChange} required/>
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
                                        <textarea type="text" id="message" name="message" value={this.state.message} className="form-control" rows="5" onChange={this.handleChange} required></textarea>
                                        <div>
                                            <label htmlFor="message" className="whiteText">Your message</label>
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
                            <div id="recaptcha" className="g-recaptcha" data-sitekey="6Ld73DYUAAAAAGhdKMGC38lIq9Ou7buQsp7t0dGc"></div>
                            <br />
                            <div className="center-on-small-only">
                                <button type="submit" value="Send" className="btn btn-primary" > Submit </button>
                            </div>
                            <div className="status" id="status"></div>
                        </form>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
            </section>
        )
    };
};