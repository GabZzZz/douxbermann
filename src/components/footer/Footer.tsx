import { Instagram, Mail } from 'lucide-react';
import './Footer.css';
import  Logo from '../../assets/logo.svg?react';

function Footer() {
    return (
        <div className='footer-principal-container'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href='/'>Accueil</a>
                    <a href='/collections'>Collection</a>
                    <a href='/collections/cage' className='ml-4'>Cage</a>
                    <a href='/collections/creme' className='ml-4'>Creme</a>
                    <a href='/collections/croquette' className='ml-4'>Croquette</a>
                    <a href='/collections/harnais' className='ml-4'>Harnais</a>
                    <a href='/collections/laisse' className='ml-4'>Laisse</a>
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