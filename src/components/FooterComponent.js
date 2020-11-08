import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container text-center">           
                <h5>Connect With Me</h5>
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/nebtunefgc"><i className="fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/nebtunefgc"><i className="fa fa-instagram" /></a>{' '}
                <a className="btn btn-social-icon btn-twitch" href="http://twitch.com/nebtune"><i className="fa fa-twitch" /></a>{' '} 
                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/perveznabil"><i className="fa fa-linkedin" /></a>{' '}
                <a className="btn btn-social-icon btn-github" href="http://www.github.com/nabilpervez"><i className="fa fa-github" /></a>{' '}
                <div class="footer-copyright text-center py-3">© 2020 Copyright: Nabil Pervez</div>
            </div>
        </footer>
    );
}

export default Footer;