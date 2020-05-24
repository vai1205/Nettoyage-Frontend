import {useState, useEffect} from "react";
import {FaPhoneAlt, FaMailBulk, FaFacebook, FaInstagram, FaVirus} from "react-icons/fa";
import {AiOutlineNotification} from "react-icons/ai";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Link from "next/link";
import Router from "next/router";
import { useLocalStorage, useEffectOnce } from "react-use";
import Popup from "../components/Popup";

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {phoneNumber, email, covid19Heading, covid19Text, close} = props.language;
    let [darkMode, setDarkMode] = useLocalStorage("isEnglish");
    useEffect(()=>{
        setTimeout(()=>{
            darkMode = JSON.parse(localStorage.getItem("darkMode"));
            let navClassList = document.querySelector("nav").classList;
            let logoElement = document.getElementById("logo");
            if(darkMode) {
                navClassList.remove("navbar-light"); 
                navClassList.remove("bg-light");
                navClassList.add("navbar-dark"); 
                navClassList.add("bg-dark");
                logoElement.setAttribute("src","/static/images/logo dark.png");
            } else {
                navClassList.remove("navbar-dark"); 
                navClassList.remove("bg-dark");
                navClassList.add("navbar-light"); 
                navClassList.add("bg-light");
                logoElement.setAttribute("src","/static/images/logo light.png");
            }
        },20);
    },[props.darkMode]);
    return(
    <div>
        <Navbar expand="md" className="fixed-top">
            <NavbarToggler onClick={toggle} />
            <Nav className="m-2 mr-5">
                <NavItem style={{position:"relative"}}>
                    <img id="logo" src=""
                    className="d-inline-block align-top navbar-logo" alt=""
                    />
                    <NavbarBrand href="/"></NavbarBrand>
                </NavItem>
            </Nav>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="tel:(514) 589-4290">
                            <FaPhoneAlt className="mr-3" />
                            {phoneNumber}
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="mailto:info@nettoyageexclusif.com">
                            <FaMailBulk className="mr-3 mb-1" />
                            {email}
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="https://www.facebook.com">
                            <FaFacebook className="mr-3 mb-1" />
                            Facebook
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="https://www.instagram.com">
                            <FaInstagram className="mr-3 mb-1" />
                                Instagram
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
                <Nav className="m-for-mobile-nav mr-5">
                    <NavItem>
                        {props.showCurrentLanguage()}
                    </NavItem>
                </Nav>
                <Nav className="m-for-mobile-nav mr-5">
                    <NavItem>
                        {props.showThemeIcon()}
                    </NavItem>
                </Nav>
                <Nav className="m-for-mobile-nav mr-5">
                    <NavItem>
                        <Popup 
                            title={covid19Heading}
                            body={covid19Text}
                            close={close}
                            popupOpener={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>}
                            popupOpenerClass="mr-3 mb-3 indicator"
                        />
                    </NavItem>
                </Nav>
        </Navbar>
    </div>
    );
};

export default Header;


