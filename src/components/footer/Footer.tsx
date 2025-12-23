import { Instagram, Mail } from 'lucide-react';
import './Footer.css';
import  Logo from '../../assets/logo.svg?react';

function Footer() {
    return (
        <div className='footer-principal-container'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href='/'>Accueil</a>
                    <p>Collections :</p>
                    {window.douxbermann.collections.map((collection: any) => (<a href={'#' + collection.link} className='ml-4'>{collection.label}</a>))}
                    <a href='/who-are-we'>Qui sommes nous ?</a>
                </div>
                <div className='footer-networks'>
                    <div>
                        <a target="_blank" href="https://www.instagram.com/douxbermann"><Instagram />@Douxbermann</a>
                    </div>
                    <div>
                        <a href="mailto:douxbermann@hotmail.com"><Mail />douxbermann@hotmail.com</a>
                    </div>
                    <Logo className='logo' />
                </div>
            </div>
        </div>
    );
}

export default Footer;