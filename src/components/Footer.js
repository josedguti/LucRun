import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Recevez les conseils courses et nutrition de Luc Run                </p>
               
                <div className="input-areas">
                    <form action="">
                        <input type='email' name='email' className="footer-input" placeholder='Votre e-mail'/>
                        <Button buttonStyle='btn--outline'>Je m'abonne</Button>
                    </form>
                </div>
                <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                      
                    </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>A propos</h2>
                        <Link to='/sign-up'>Qui suis-je</Link>
                        <Link to='/'>Témoignages</Link>
                        <Link to='/'>CGP</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>                        
                        <Link to='/'>Contact</Link>
                        <Link to='/'>CGP</Link>
                    </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Réseaux Sociaux</h2>                       
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Luc Run <i className="fas fa-running" />
                        </Link>
                    </div>
                    
                    <small className="website-rights">Luc Run &copy; Created by Jose Gutierrez 2021</small>
                   
                    
                </div>
            </section>
        </div>
    )
}

export default Footer;
