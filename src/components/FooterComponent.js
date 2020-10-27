import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">           
                <h5>Social</h5>
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                <a className="btn btn-social-icon btn-google" href="http://twitch.com/"><i className="fa fa-twitch" /></a>{' '} 
                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-linkedin" /></a>{' '}
                <a className="btn btn-social-icon btn-github" href="http://www.github.com/"><i className="fa fa-github" /></a>{' '}
            </div>
        </footer>
    );
}

export default Footer;