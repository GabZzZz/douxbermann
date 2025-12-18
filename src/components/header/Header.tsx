import './Header.css';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import  Logo from '../../assets/logo.svg?react';
import { House } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Header() {

    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-navigations'>
                    <a className='header-link home-link' href="/">
                        <Button variant="ghost">
                            <House />
                        </Button>
                    </a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <a href="/collections">Collections</a>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        <a className="sublink" href="/collections/leach">Laisse</a>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        <a className="sublink" href="/collections/collar">Collier</a>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <a className='header-link' href="/who-are-we">
                        <Button variant="ghost">Qui sommes nous ?</Button>
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
                        <Button variant="ghost">
                            <Mail />
                        </Button>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/douxbermann">
                        <Button variant="ghost">
                            <Instagram />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Header;