import { Instagram, Mail } from 'lucide-react';
import './Footer.css';
import  Logo from '../../assets/logo.svg?react';
import { toast } from "sonner";

function Footer() {
    const copyMailToClipboard = () => {
        navigator.clipboard.writeText('douxbermann@hotmail.com').then(() => toast.info("Adresse mail copié.\n Vous pouvez la coller dans votre client mail préféré, et envoyer votre mail."));
    };

    const openInstagram = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = "https://www.instagram.com/douxbermann";
        } else {
            window.open(
            "https://www.instagram.com/douxbermann",
            "_blank",
            "noopener,noreferrer"
            );
        }
    };
    
    return (
        <div className='footer-principal-container'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href='/'>Accueil</a>
                    <p>Collections :</p>
                    { 
                        window.douxbermann.collections.map((collection: any, index: number) => (
                            <a key={`${collection.name}-${index}`} href={`/collections/${collection.name}`} className='ml-4'>{collection.label}</a>
                        ))}
                    <a href='/who-are-we'>Qui sommes nous ?</a>
                </div>
                <div className='footer-networks'>
                    <div>
                        <a onClick={openInstagram}><Instagram />@Douxbermann</a>
                    </div>
                    <div>
                        <a href="mailto:douxbermann@hotmail.com" onClick={copyMailToClipboard}><Mail />douxbermann@hotmail.com</a>
                    </div>
                    <Logo className='logo' />
                </div>
            </div>
        </div>
    );
}

export default Footer;