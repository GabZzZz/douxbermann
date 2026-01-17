import './Header.css';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import  Logo from '../../assets/logo.svg?react';
import { House } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from '../ui/button';
import { useEffect } from 'react';
import { toast } from "sonner";

function Header() {
    useEffect(() => {}, [window.douxbermann]);

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

    const sendMail = () => {
        const to = "douxbermann@hotmail.com";
        const subject = encodeURIComponent(
            `Demande d'information`
        );
        const body = encodeURIComponent(
        `Bonjour,

        Je vous contacte au sujet de : 

        Cordialement,`
        );

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

        navigator.clipboard.writeText(body).then(() => toast.info("Le corp de mail a été copié dans le clipboard.\n Vous pouvez le coller dans votre client mail préféré, et envoyer votre mail à l'adresse douxbermann@hotmail.com"));
    };

    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-navigations'>
                    <a className='header-link home-link' href="/">
                        <Button variant="link">
                            <House />
                        </Button>
                    </a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <span className="menu">Collections</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {window.douxbermann && window.douxbermann.collections.map((collection: any) => (
                                        <NavigationMenuLink>
                                            <a className="sublink" href={collection.link}>{collection.label}</a>
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <a className='header-link' href="/who-are-we">
                        <Button variant="link">Qui sommes nous ?</Button>
                    </a>
                </div>
                <div className='header-logo-container'>
                    <div className="soft-curve soft-curve-left"></div>
                    <div className='header-logo'>
                        <Logo className='logo' />
                    </div>
                    <div className="soft-curve soft-curve-right"></div>
                </div>
                <div className='header-contacts'>
                    <Button variant="link" onClick={sendMail}>
                        <Mail />
                    </Button>
                    <Button variant="link" onClick={openInstagram}>
                        <Instagram />
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Header;