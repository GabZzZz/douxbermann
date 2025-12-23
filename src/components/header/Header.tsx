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

function Header() {
    useEffect(() => {}, [window.douxbermann]);

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
                                            <a className="sublink" href={'#' + collection.link}>{collection.label}</a>
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <a className='header-link' href="#/who-are-we">
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
                    <a href="mailto:douxbermann@hotmail.com">
                        <Button variant="link">
                            <Mail />
                        </Button>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/douxbermann">
                        <Button variant="link">
                            <Instagram />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Header;