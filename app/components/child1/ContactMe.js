var React = require('react');
import { HashRouter, Route, Link } from 'react-router-dom';

export default class ContactMe extends React.Component {



    render(){
        return(
            <div className='col'>
                <Link to='/contact' ><p className="navbar-brand">Contact Me</p></Link>
            </div>
        )
    }
}